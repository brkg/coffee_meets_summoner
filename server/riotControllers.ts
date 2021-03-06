import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import obj from './items';
import dotenv from 'dotenv';
import IObj from './IObj'

dotenv.config();

const riotController:IObj = {};

//we are expected ro recieved summoner name 
riotController.convertToPuuid = (req: Request , res: Response, next: NextFunction):void => {
  const { summonerName }: { summonerName: string} = req.body; //this will be used in a template literal for the api address
  const URLencoded = encodeURIComponent(summonerName)
  axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${URLencoded}?api_key=${process.env.API_KEY}`)
    .then((data: IObj)=> {
      // console.log('puuid', data.data.puuid)
      res.locals.puuid = data.data.puuid;
      res.locals.id = data.data.id;
      res.locals.avatar = data.data.profileIconId;
      next();
    })
    .catch((err:any) => next(err));
};

//using the IDs we extracted, destructure out the necessary id and grab the rank from the API
riotController.getRank = (req: Request, res: Response, next: NextFunction):void => {
  const id: string = res.locals.id;
  res.locals.getSummoner = {};
  axios.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.API_KEY}`)
    .then((data: IObj) => {
      const userInfo: IObj = {};
      data.data.forEach((obj: IObj) => {
          if(obj.queueType === 'RANKED_SOLO_5x5'){
            userInfo.tier = obj.tier;
            userInfo.rank = obj.rank;
            userInfo.points = obj.leaguePoints;
            userInfo.wins = obj.wins;
            userInfo.losses = obj.losses;
            userInfo.avatar = res.locals.avatar;
          }
      })
      res.locals.getSummoner.userInfo = userInfo;
      next();
    })
    .catch((err:any) => next(err));
};

//https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/bYxTa0Sq6DFXxDERMRGLSdnw0Fy7utzXFvIdSz_H6Bjy1C8?api_key=RGAPI-d2e110dd-8e54-44de-9d25-17f5122d5cbb

riotController.getOtherPlayers = (req: Request, res: Response, next: NextFunction):void => {
  const { tier, rank } = res.locals.getSummoner.userInfo;
  //data returned from this fetch should grab all players under the tier and rank criteria
  axios.get(`https://na1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/DIAMOND/IV?api_key=${process.env.API_KEY}`)
    .then((data: IObj)=> {
      //retrieve the top 20 results from this fetch request
      const players: Array<IObj> = [];
      for(let i = 0; i < 20; i++){
        const player: IObj = {};
        player['tier'] = data.data[i].tier;
        player['rank'] = data.data[i].rank;
        player['points'] = data.data[i].leaguePoints;
        player['wins'] = data.data[i].wins;
        player['losses'] = data.data[i].losses;
        player['summonerName'] = data.data[i].summonerName;
        players.push(player);
      };
      res.locals.getSummoner.playerList = players;
      console.log(players[0]);
      next();
    })
    .catch((err:any) => next(err));
};

//controller for grabbing the matches the selected player has played
riotController.getMatches = (req: Request, res: Response, next: NextFunction):void => {
  // console.log('get matches?', res.locals.puuid)
  const puuid = res.locals.puuid;
  axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${process.env.API_KEY}`)
    .then((data: IObj) => {
      res.locals.matches = data.data;
      next();
    })
    .catch((err:any) => next(err));
}

//controller will then take the match ids which should grab the details of that game and we want to send back an array of objects representing each game (limit: 5);
riotController.getMatchDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // console.log('get match details?')
  try{
    const Promises: Array<Promise<object>> = [];  
    res.locals.matches.forEach((match: string)=>{
      Promises.push(axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${process.env.API_KEY}`))
    });

    const matchDetails: Array<IObj> = [];
    const results = await Promise.all(Promises);

    results.forEach((data: IObj) => {
      let playerMatch: IObj = {};
      data.data.info.participants.forEach( (participant: IObj) => {
        if(participant['puuid'] === res.locals.puuid){
          playerMatch['championName'] = participant.championName;
          playerMatch['lane'] = participant.lane;
          playerMatch['kills'] = participant.kills;
          playerMatch['deaths'] = participant.deaths;
          playerMatch['assists'] = participant.assists;
          playerMatch['items'] = [participant.item0, participant.item1, participant.item2, participant.item3, participant.item4, participant.item5, participant.item6];
          playerMatch['win'] = participant.win;
          playerMatch['masteries'] = participant.perks.styles;
          playerMatch['spells'] = [participant.summoner1Id, participant.summoner2Id];
          matchDetails.push(playerMatch);
        }
      });
    });
    res.locals.matchDetails = matchDetails;
    // console.log('getMatchDetails', res.locals.matchDetails)
    next();
  }
  catch(err){
    next(err);
  };
};

riotController.getItemsAndSpells = (req: Request, res: Response, next: NextFunction):void => {
  try{
    // console.log('before for loop', res.locals.matchDetails)
    res.locals.matchDetails.forEach((playerMatch: IObj) => {
      const itemList: Array<IObj> = [];
      const spellList: Array<IObj> = [];
      // console.log('playerMatch.items', playerMatch.items);
      playerMatch.items.forEach((item: string) => {
        const itemDetail: IObj = {};
        if(item != "0"){
          itemDetail['id'] = item;
          itemDetail['name'] = obj.items[item]["name"];
          itemDetail['text'] = obj.items[item].plaintext;
          // console.log('this is itemDetail', itemDetail)
          itemList.push(itemDetail);
        }
      });

      playerMatch.spells.forEach((spell: string) => {
        const spellDetail: IObj = obj.summonerSpells[spell];
        spellList.push(spellDetail);
      });

      playerMatch.items = itemList;
      playerMatch.spells = spellList;
    });
    // console.log('this is res.locals.matchDetails', res.locals.matchDetails);
    next();  
  } 
  catch(err){
    next(err);
  }
}

export default riotController;
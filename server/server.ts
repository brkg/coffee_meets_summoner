import express, {Response, Request} from 'express';
import path from 'path';
// import riotRouter from './riotRouter';
import riotController from './riotControllers';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, './')));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../src/index.html"));
});

// app.use('/riotRouter', riotRouter)
app.post('/api/getSummoner', riotController.convertToPuuid, riotController.getRank, riotController.getOtherPlayers, (req: Request, res: Response) =>{
  res.status(200).json(res.locals.getSummoner);
});

app.post('/api/getMatch', riotController.convertToPuuid, riotController.getMatches, riotController.getMatchDetails, riotController.getItemsAndSpells, (req: Request, res: Response) => {
  console.log(res.locals.matchDetails, "here at matches");
  res.status(200).json(res.locals.matchDetails)
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  });
}

export default app;

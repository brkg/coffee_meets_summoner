import { Request, Response, NextFunction } from 'express';
import IObj from './IObj';
import db from './database';
import bcrypt from 'bcrypt';

const userController: IObj = {};
const SALT_FACTOR = 10;

userController.signup = async (req: Request, res: Response, next: NextFunction) => {
  let hashedPassword;
  try{
    hashedPassword = await bcrypt.hash(req.body.password, SALT_FACTOR);
  } catch(error){
    console.log("error with hashing");
    return next(error);
  }
  const ADD_USER_QUERY = 'INSERT INTO Users (Username, Password, Summoner)\n'+
                         `VALUES ('${req.body.username}', '${hashedPassword}', '${req.body.summoner}')`;
  try
  {
    db.query(ADD_USER_QUERY)
      .then((result: any) => {
        console.log(result);
        res.locals.user = result;
      });
  }
  catch(error)
  {
    console.log("add user error: " + error);
    return next(error);
  }
  return next();
}

userController.validateSignup = (req: Request, res: Response, next: NextFunction) => {
  if(!req.body.username || !req.body.password || !req.body.summoner){
    return next("error: some parts of request body missing");
  }
}

userController.checkLogin = async(req: Request, res: Response, next: NextFunction) => {
  console.log("inside of login");
  const {username, password} = req.body;
  if(!username || !password){
    return next('requires username and password');
  }

  const QUERY = `SELECT * FROM Users WHERE Username='${username}'`;
  db.query(QUERY)
    .then(async (result: any) => {
      const isValid = await bcrypt.compare(password, result.rows[0].password);
      if(isValid){
        res.locals.verifiedUser = result.rows[0];
        return next();
      }
      else 
        return next("no user valid");
    });
}

export default userController;
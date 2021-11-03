import { Request, Response, NextFunction } from 'express';
import IObj from './IObj';
import db from './database';
import bcrypt from 'bcrypt';

const userController: IObj = {};
const SALT_FACTOR = 10;

type User = {
  username: string,
  password: string,
  summoner: string
}

declare let user: User | null;


userController.signup = async (req: Request, res: Response, next: NextFunction) => {
  let hashedPassword;
  try{
    console.log(req.body.password);
    hashedPassword = await bcrypt.hash(req.body.password, SALT_FACTOR);
  } catch(error){
    console.log("error with hashing");
    return next(error);
  }
  const ADD_USER_QUERY = 'INSERT INTO Users (Username, Password, Summoner)\n'+
                         `VALUES ('${req.body.username}', '${hashedPassword}', '${req.body.summoner}')`;
  try
  {
    db.query(ADD_USER_QUERY);
  }
  catch(error)
  {
    console.log("add user error: " + error);
    return next(error);
  }
  return next();
}

export default userController;
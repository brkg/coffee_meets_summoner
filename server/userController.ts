import { NextFunction } from 'express';
import IObj from './IObj';
import db from './database';

const userController: IObj = {};

userController.signup = async (req: Request, res: Response, next: NextFunction) => {

}

export default userController;
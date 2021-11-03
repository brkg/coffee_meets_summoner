import express, {Response, Request, NextFunction} from 'express';
import path from 'path';
// import riotRouter from './riotRouter';
import riotController from './riotControllers';
import userController from './userController';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, './')));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../src/index.html"));
});

app.post("/api/signup", userController.signup, (req, res) => {
  return res.status(200);
});

// app.use('/riotRouter', riotRouter)
app.post('/api/getSummoner', riotController.convertToPuuid, riotController.getRank, riotController.getOtherPlayers, (req: Request, res: Response) =>{
  res.status(200).json(res.locals.getSummoner);
});

app.post('/api/getMatch', riotController.convertToPuuid, riotController.getMatches, riotController.getMatchDetails, riotController.getItemsAndSpells, (req: Request, res: Response) => {
  // console.log(res.locals.matchDetails, "here at matches");
  res.status(200).json(res.locals.matchDetails)
})

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send("<h1>oof 404</h1>"));

// global error function
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  });
}

export default app;

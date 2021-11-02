import express from 'express';
import path from 'path';

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, './'))); 

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../src/index.html"));
});
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  });
}

export default app;

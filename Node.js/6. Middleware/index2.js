import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.use(morgan("tiny"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

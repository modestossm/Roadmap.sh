import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(express.static("public"));

const db = new pg.Client({
  user: process.env.DB.USER,
  host: process.env.DB.HOST,
  database: process.env.DB.DATABASE,
  password: process.env.DB.PASSWORD,
  port: process.env.DB.PORT,
});

db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const result = await db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);

  console.log(result);
  res.render("secrets.ejs");
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username);
  console.log(password);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

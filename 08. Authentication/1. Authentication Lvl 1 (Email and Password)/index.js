import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(express.static("public"));

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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

  try {
    const checkResult = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    console.log(checkResult);
  
    if(checkResult.rows.length > 0) {
      res.send("Email alredy exists. Try logging in.");
    } else {
      const result = await db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
      console.log(result);
    }

    res.render("secrets.ejs");
  } catch(err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);

    if(result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;

      if(password === storedPassword) {
        res.render("secrets.ejs");
      } else {
        res.send("Incorrect Password!");
      }

      console.log(result.rows);
    } else {
      res.send("User not found!");
    }
  } catch (err) {
    console.log(err);
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
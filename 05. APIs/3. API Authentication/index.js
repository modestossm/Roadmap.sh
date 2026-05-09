import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "";
const yourPassword = "";
const yourAPIKey = "";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {

});

app.get("/basicAuth", (req, res) => {

});

app.get("/apiKey", (req, res) => {

});

app.get("/bearerToken", (req, res) => {

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "samssm";
const yourPassword = "1234";
const yourAPIKey = "cfa59178-a356-4549-a9f3-42181a80b762";
const yourBearerToken = "e9f859dd-f05e-4e85-bd61-12036993363c";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {
  try{
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", {content: JSON.stringify(result.data)})
  } catch (error) {
    res.status(404).send("Error:", error.message);
  }
});

app.get("/basicAuth", (req, res) => {
  try {
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send("Error:", error.message);
  }
});

app.get("/apiKey", (req, res) => {
  try {
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch (error) {
      res.status(404).send(error.message);
  }
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", (req, res) => {
  try {
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

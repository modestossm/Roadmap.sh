import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// const port = 3000;

// let userIsAuthorised = false;

// app.use(bodyParser.urlencoded({extended: true}));

// function passwordCheck(req, res, next) {
//     const password = req.body["password"];
//     if(password === "ILoveProgramming") {
//         userIsAuthorised = true;
//     }
//     next();
// }

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// });

// app.post("/check", passwordCheck, (req, res) => { // Apply passwordCheck middleware specifically to this POST route
//     if(userIsAuthorised) {
//         res.sendFile(__dirname + "/public/secret.html");
//     } else {
//         userIsAuthorised = false; // It's good practice to reset this if authentication fails or for a new attempt.
//         res.sendFile(__dirname + "/public/index.html");
//     }
// });

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });

eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});

eventEmitter.emit('start', 22);
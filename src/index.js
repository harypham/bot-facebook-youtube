require('dotenv').config();
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import express from "express";
import bodyParser from "body-parser";

let app = express().use(bodyParser.json());

configViewEngine(app);

initRoutes(app);

let port = process.env.PORT;
app.listen(port, () => console.log(`Chat bot messenger is listening at port ${port}!`));

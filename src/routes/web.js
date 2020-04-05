import express from "express";

let router = express.Router();

let initRoutes = (app) => {
    // app.get('/', homeController.getHomePage);
    return app.use("/", router);
};
module.exports = initRoutes;

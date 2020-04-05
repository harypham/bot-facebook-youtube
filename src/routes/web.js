import express from "express";
import home from "./../controllers/homeController";

let router = express.Router();

let initRoutes = (app) => {
    // 5 routes for one @@ validate in route increase routes
    app.get('/', home.getHomePage);
    // app.get('/webhook/zalo', home.getWebhookZalo);
    // app.post('/webhook/zalo', home.postWebhookZalo);
    // app.get('/webhook', home.getWebhookZalo);
    app.get('/webhook', home.getWebhookFB);
    app.post('/webhook', home.postWebhookFB);
    return app.use("/", router);
};
module.exports = initRoutes;

import express from "express";
import expressEjsExtend from "express-ejs-extend";
import expressLayouts from 'express-ejs-layouts';

/**
 * Config view engine for app
 */
let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.engine("ejs", expressEjsExtend);
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
    app.use(expressLayouts);
};

module.exports = configViewEngine;

require('dotenv').config();

let getHomePage = (req, res) => {
    return res.render("app.ejs");
};

module.exports = {
    getHomePage: getHomePage,
};

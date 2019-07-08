const path = require("path")
module.exports = app => {
    //Route to display survey.html
    app.get("/survey",(req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //Route to display home page if anything requested is not "/survey"
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
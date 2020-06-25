const express = require("express");
const app = express();
const helmet = require("helmet");
const bodyparser = require("body-parser");

app.use(helmet());

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

/*middle ware*/
app.use(express.static(__dirname + "/public"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "content-type");
    next();
});

/* router */
var routes = require("./routes/routes");
routes(app);

module.exports = app;

var express = require("express");
var router = express.Router();
import * as common from "../commnon";

/* GET home page. */
router.get("/", function (req, res, next) {
  const test = common.makeJson("helloWorld");
  res.json(test);
});

module.exports = router;

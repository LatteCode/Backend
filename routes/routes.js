import * as common from "../public/javascripts/commnon";
import { dbQuery } from "../public/javascripts/db";

/* router */
module.exports = function(app) {
    /* full path */
    app.use("/:kind/:team", query);

    app.use((err, req, res, next) => {
        console.log(err);
        res.status(404);
        res.json(err);
    });
};

async function query(req, res) {
    console.log(req.url)
    let {
        kind, team
    } = req.params;
    let test = common.makeJson(kind+team)
    let query = "SELECT NOW() as now;"
    let data = await dbQuery(query)
    console.log(data[0].now)
    res.json(data[0].now)
}

import * as common from "../public/javascripts/commnon";
import { dbQuery, pool } from "../public/javascripts/db";


/* router */
module.exports = function(app) {
    /*result*/
    app.use("/result/:department/:team", query);

    /* error handle */
    app.use("*", (req, res, next) => {
        next({ errorcode: "404" });
    });

    app.use((err, req, res, next) => {
        console.log(err);
        res.status(404);
        res.json(err);
    });
};

async function query(req, res) {
    console.log(req.url)
    let {
        department, team
    } = req.params;
    let job = req.param('job')
    console.log(req.params)

    //example : select * from Information where kind=(SELECT idx from Department where college = '공학대학' and Department.department = '행정팀') and name = '기계공학';
    let query = `select * from Information where kind=(SELECT idx from Department where college = ${pool.escape(department)} and Department.department = ${pool.escape(team)}) and name = ${pool.escape(job)};`
    console.log("query : " + query)
    let data = await dbQuery(query)
    let result = {...data[0]}
    console.log(result)


    res.json(common.makeJson(result))
}

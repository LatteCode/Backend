import * as mysql from "mysql2/promise";
import * as fs from "fs";

const db_User = process.env['db_user']
const db_Passwd = process.env['db_passwd']

const pool = mysql.createPool({
    host: 'server.jaram.net',
    port: '5992',
    user: db_User,
    password: db_Passwd,
    database: 'lattecode',
    // ssl: {
    //     key: fs.readFileSync('./certs/client-key.pem'),
    //     cert: fs.readFileSync('./certs/client-cert.pem')
    // }
});

const dbQuery = async (query) => {
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            await connection.beginTransaction(); // START TRANSACTION
            const [rows] = await connection.query(query);
            await connection.commit(); // COMMIT
            connection.release();
            return rows;
        } catch(err) {
            await connection.rollback(); // ROLLBACK
            connection.release();
            console.log('Query Error');
            return false;
        }
    } catch(err) {
        console.log('DB Error');
        return false;
    }
};

export { dbQuery }
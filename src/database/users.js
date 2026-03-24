const pool = require("./connection");

async function listUsers(){
    const sql = "SELECT * FROM users ORDER BY name ASC";
    const {rows} = await pool.query(sql);
    return rows;
};

modeule.exports = {
    listUsers
}
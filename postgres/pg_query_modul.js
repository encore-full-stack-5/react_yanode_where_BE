const { Client } = require("pg");

const DBinit = {
    user: "where_db_admin",
    host: "192.168.80.39",
    database: "where_db",
    password: "1234",
    port: 5432,
};

exports.getQuery = async (sql, values) => {
    const client = new Client(DBinit);
    client.connect();
    const result = await client.query(sql, values)
    client.end();
    return result;
}

exports.updateQuery = async (sql, values) => {
    const client = new Client(DBinit);
    let result = null;
    client.connect();
    await client.query("BEGIN");
    try{
        result = await client.query(sql, values)
        await client.query("COMMIT");
    }catch(e) {
        await client.query("ROLLBACK");
        console.log(e);
    }
    client.end();
    return result;
}
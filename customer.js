
const { Client } = require("pg");
const DBinit = {
    user: "where_db_admin",
    host: "192.168.80.39",
    database: "where_db",
    password: "1234",
    port: 5432,
};

const getQuery = async (q) => {
    const client = new Client(DBinit);
    client.connect();
    const result = await client.query(q)
    client.end();
    return result;
}

exports.getNow = (e) => {
    return getQuery("SELECT now()");
}

exports.CustomerByLGN_ID = (lgn_id) => {
    return getQuery("SELECT * FROM customer where \"LGN_ID\" = '" + lgn_id + "'");
}
exports.CustomerByLGN_IDAndPASSWD = (lgn_id, passwd) => {
    return getQuery("SELECT * FROM customer where \"LGN_ID\" = '" + lgn_id + "' AND \"PASSWD\" = '" + passwd + "'");
}
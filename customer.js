
const pg = require('./pg_query_modul');

exports.CustomerByLGN_ID = (lgn_id) => {
    return pg.getQuery("SELECT * FROM customer where \"LGN_ID\" = $1", [lgn_id]);
}

exports.CustomerByLGN_IDAndPASSWD = (lgn_id, passwd) => {
    return pg.getQuery("SELECT * FROM customer where \"LGN_ID\" = $1 AND \"PASSWD\" = $2", [lgn_id, passwd]);
}

exports.createCustomer = (LGN_ID, PASSWD, CUST_NM) => {
    return pg.updateQuery("insert into customer(\"LGN_ID\", \"PASSWD\", \"CUST_NM\") values ($1, $2, $3)", [LGN_ID, PASSWD, CUST_NM]);
}

const pg = require('./pg_query_modul');

/**
 * `Cusomer`Table에서 데이터ID와 일치하는 고객의 정보를 반환합니다.
 * @param {*} cust_id - 계정명
 * @returns 해당 `Customer`의 정보가 모두 담긴 JSON
 */
exports.CustomerByCUST_ID = (cust_id) => {
    return pg.getQuery("SELECT * FROM customer where \"CUST_ID\" = $1", [cust_id]);
}

/**
 * `Cusomer`Table에서 계정명과 일치하는 고객의 정보를 반환합니다.
 * @param {*} lgn_id - 계정명
 * @returns 해당 `Customer`의 정보가 모두 담긴 JSON
 */
exports.CustomerByLGN_ID = (lgn_id) => {
    return pg.getQuery("SELECT * FROM customer where \"LGN_ID\" = $1", [lgn_id]);
}

/**
 * `Customer`Table을 받아온 param을 조건으로 `SELECT`한 결과를 반환합니다.
 * @param {*} lgn_id - 계정명
 * @param {*} passwd - 암호
 * @returns if correct `\<return>.rowcount = 1`, else `\<return>.rowcount = 0`
 */
exports.CustomerByLGN_IDAndPASSWD = (lgn_id, passwd) => {
    return pg.getQuery("SELECT * FROM customer where \"LGN_ID\" = $1 AND \"PASSWD\" = $2", [lgn_id, passwd]);
}

/**
 * `[LGN_ID, PASSWD, CUST_NM, TELNO, BSC_ADDR, DTL_ADDR, GENDER, BIRTHDAT, EMAIL]`
 * @param {*} props - `Customer`생성에 필요한 모든 정보가 포함되야 합니다.
 * @returns `\<return>.rowcount = 1`
 */
exports.createCustomer = (props) => {
    return pg.updateQuery("INSERT INTO customer(\"LGN_ID\", \"PASSWD\", \"CUST_NM\", \"TELNO\", \"BSC_ADDR\", \"DTL_ADDR\", \"GENDER\", \"BIRTHDAT\", \"EMAIL\", \"JOIN_DT\", \"USE_YN\") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, now(), 1)", [...props]);
}

/**
 * `[CUST_ID, CUST_NM, TELNO, BSC_ADDR, DTL_ADDR, GENDER, BIRTHDAT, EMAIL]`
 * @param {*} props - 업데이트할 내역을 포함한 `Customer`의 전체 Info가 필요합니다.
 * @returns `\<return>.rowcount = 1`
 */
exports.updateCustomerInfoAll = (props) => {
    return pg.updateQuery("UPDATE customer SET CUST_ID = $1, CUST_NM = $2, TELNO = $3, BSC_ADDR = $4, DTL_ADDR = $5, GENDER = $6, BIRTHDAT = $7, EMAIL = $8 WHERE CUST_ID = $1", [...props]);
}

/**
 * 해당 `Customer`의 `USE_YN`을 `0`으로 변경하고 현재시각을 `WHDW_DT`에 기록합니다.
 * @param {*} cust_id - 계정명
 * @returns `\<return>.rowcount = 1`
 */
exports.disableCustopmerByCUST_ID = (cust_id) => {
    return pg.updateQuery("UPDATE customer SET USE_YN = 0, WHDW_DT = now() WHERE CUST_ID = $1", [cust_id]);
}
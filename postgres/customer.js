const pg = require("./pg_query_modul");

//비번, useyn등 필요없는거 제외하는 수정필요
/**
 * `Cusomer`Table에서 데이터ID와 일치하는 고객의 정보를 반환합니다.
 * @param {*} cust_id - 고객 ID
 * @returns 해당 `Customer`의 정보가 모두 담긴 JSON
 */
exports.getCustomerByCustomerId = (cust_id) => {
  return pg.getQuery('SELECT * FROM customer where "CUST_ID" = $1', [cust_id]);
};

/**
 * `Cusomer`Table에서 계정명과 일치하는 고객의 정보를 반환합니다.
 * @param {*} lgn_id - 계정명
 * @returns 해당 `Customer`의 정보가 모두 담긴 JSON
 */
exports.getCustomerByLogInId = (lgn_id) => {
  return pg.getQuery('SELECT * FROM customer where "LGN_ID" = $1', [lgn_id]);
};

/**
 * `Customer`Table을 받아온 param을 조건으로 `SELECT`한 결과를 반환합니다.
 * @param {*} lgn_id - 계정명
 * @param {*} passwd - 암호
 * @returns if correct `\<return>.rowcount = 1`, else `\<return>.rowcount = 0`
 */
exports.isCustomerByLogInIdAndPw = (lgn_id, passwd) => {
  return pg.getQuery(
    'SELECT * FROM customer where "LGN_ID" = $1 AND "PASSWD" = $2',
    [lgn_id, passwd]
  );
};

/**
 * `[LGN_ID, PASSWD, CUST_NM, TELNO, ZIPN, BSC_ADDR, DTL_ADDR, GENDER, BIRTHDAT, EMAIL]`
 * @param {*} props - `Customer`생성에 필요한 모든 정보
 * @returns `<return>.rowcount = 1`
 */
exports.createNewCustomer = (props) => {
  return pg.updateQuery(
    'INSERT INTO customer("LGN_ID", "PASSWD", "CUST_NM", "TELNO", "ZIPN", "BSC_ADDR", "DTL_ADDR", "GENDER", "BIRTHDAT", "EMAIL", "JOIN_DT", "USE_YN") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, now(), 1)',
    [...props]
  );
};

/**
 * `[CUST_ID, CUST_NM, TELNO, ZIPN, BSC_ADDR, DTL_ADDR, GENDER, BIRTHDAT, EMAIL]`
 * @param {*} props - 업데이트할 내역을 포함한 `Customer`의 전체 Info
 * @returns `<return>.rowcount = 1`
 */
exports.updateCustomerInfoAllByCustId = (props) => {
  return pg.updateQuery(
    'UPDATE customer SET "CUST_NM" = $2, "TELNO" = $3, "ZIPN" = $4, "BSC_ADDR" = $5, "DTL_ADDR" = $6, "GENDER" = $7, "BIRTHDAT" = $8, "EMAIL" = $9 WHERE "CUST_ID" = $1',
    [...props]
  );
};

/**
 * 해당 `Customer`의 `USE_YN`을 `0`으로 변경하고 현재시각을 `WHDW_DT`에 기록합니다.
 * @param {*} cust_id - 고객 ID
 * @returns `<return>.rowcount = 1`
 */
exports.disableCustopmerByCustId = (cust_id) => {
  return pg.updateQuery(
    'UPDATE customer SET "USE_YN" = 0, "WHDW_DT" = now() WHERE "CUST_ID" = $1',
    [cust_id]
  );
};

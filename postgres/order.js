//미완
const pg = require("./pg_query_modul");

//비번, useyn등 필요없는거 제외하는 수정필요
/**
 * `Cusomer`Table에서 데이터ID와 일치하는 고객의 정보를 반환합니다.
 * @param {*} order_id - 고객 ID
 * @returns 해당 `Customer`의 정보가 모두 담긴 JSON
 */
exports.getOrderIDByCustomerId = (cust_id) => {
  return pg.getQuery('SELECT * FROM order where "CUST_ID" = $1', [cust_id]);
};

exports.getOrderIDByShopId = (shop_id) => {
  return pg.getQuery('SELECT * FROM order where "SHOP_ID" = $1', [shop_id]);
};
exports.getOrderIDByOrderId = (ord_id) => {
  return pg.getQuery('SELECT * FROM order where "SHOP_ID" = $1', [ord_id]);
};

exports.createNewOrder = (props) => {
  return pg.updateQuery(
    'INSERT INTO order("CUST_ID", "SHOP_ID", "ORD_QTY", "ORD_TPRC", "DLV_PRC", "ORDRR_NM", "RCVR_NM", "RCVR_TELNO", "RCVR_ZIPN", "RCVR_BSC_ADDR", "RCVR_DTL_ADDR", "WBILL_NO","ORD_DT") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11,$12,$13, now() )',
    [...props]
  );
};

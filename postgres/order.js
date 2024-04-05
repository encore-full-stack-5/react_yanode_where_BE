const pg = require("./pg_query_modul");

exports.getOrderIDByCustomerId = (cust_id) => {
  return pg.getQuery('SELECT * FROM orders where "CUST_ID" = $1', [cust_id]);
};
exports.getOrderIDByShopId = (shop_id) => {
  return pg.getQuery('SELECT * FROM orders where "SHOP_ID" = $1', [shop_id]);
};
exports.getOrderIDByOrderId = (ord_id) => {
  return pg.getQuery('SELECT * FROM orders where "ORD_ID" = $1', [ord_id]);
};

exports.createNewOrder = (props) => {
  return pg.updateQuery(
    'INSERT INTO orders("CUST_ID", "SHOP_ID", "ORD_QTY", "ORD_TPRC", "DLV_PRC", "ORDRR_NM", "RCVR_NM", "RCVR_TELNO", "RCVR_ZIPN", "RCVR_BSC_ADDR", "RCVR_DTL_ADDR", "WBILL_NO","ORD_DT") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11,$12,$13, now() )',
    [...props]
  );
};

exports.getOrderInfoForCustomerByCustomerId = (cust_id) => {
  return pg.getQuery(
    'SELECT '+
      'o."ORD_ID" AS "ORD_ID", '+
      'p."GDS_NM" AS "GDS_NM", '+
      'o."ORD_QTY" AS "ORD_QTY", '+
      'o."ORD_TPRC" AS "ORD_TPRC", '+
      's."SHOP_NM" AS "SHOP_NM", '+
      'd."DLV_STATE" AS "DLV_STATE", '+
      'op."ORD_STATE" AS "ORD_STATE" '+
    'FROM orders as o '+
      'INNER JOIN shop AS s ON s."SHOP_ID" = o."SHOP_ID" '+
      'INNER JOIN order_product AS op ON op."ORD_ID" = o."ORD_ID" '+
      'INNER JOIN product AS p ON p."GDS_ID" = op."GDS_ID" '+
      'INNER JOIN delivery AS d ON d."ORD_ID" = o."ORD_ID" '+
    'WHERE o."CUST_ID" = $1',
    [cust_id]
  );
}

exports.getOrderDetailInfoForCustomerByOrderId = (ord_id) => {
  return pg.getQuery(
    'SELECT '+
    'o."ORD_ID" AS "ORD_ID", '+
    's."SHOP_NM" AS "SHOP_NM", '+
    'o."ORD_DT" AS "ORD_DT", '+
    'o."RVR_ZIPN" AS "RVR_ZIPN", '+
    'o."RCVR_BSC_ADDR" AS "RCVR_BSC_ADDR", '+
    'o."RCVR_DTL_ADDR" AS "RCVR_DTL_ADDR", '+
    'o."ORD_QTY" AS "ORD_QTY", '+
    'o."ORD_TPRC" AS "ORD_TPRC", '+
    'o."DLV_PRC" AS "DLV_PRC" '+
    'FROM orders as o '+
    'INNER JOIN shop AS s ON s."SHOP_ID" = o."SHOP_ID" '+
    'WHERE o."ORD_ID" = $1 ',
    [ord_id]
  );
}

exports.getOrderDetailInfoOptionsForCustomerByOrderId = (ord_id) => {
  return pg.getQuery(
    'SELECT '+
    'p."GDS_NM" AS "GDS_NM", '+
    'p."GDS_PRC" AS "GDS_PRC", '+
    'opt."OPTION_NM" AS "OPTION_NM", '+
    'opt."OPTION_PRC" AS "OPTION_PRC", '+
    'o."ORD_QTY" AS "ORD_QTY" '+
    'FROM orders as o '+
    'INNER JOIN order_product AS op ON op."ORD_ID" 	= o."ORD_ID" '+
    'INNER JOIN product AS p ON p."GDS_ID" = op."GDS_ID" '+
    'LEFT JOIN order_product_option AS opp ON opp."ORD_GDS_ID" = op."ORD_GDS_ID" '+
    'LEFT JOIN option AS opt ON opt."OPTION_ID" = opp."OPTION_ID" '+
    'WHERE o."ORD_ID" = $1',
    [ord_id]
  );
}

exports.getOrderInfoForOwnerByOwnerId = (owner_id) => {
  return pg.getQuery(
    'SELECT '+
      'o."ORD_ID" AS "ORD_ID", '+
      'p."GDS_NM" AS "GDS_NM", '+
      'o."ORDRR_NM" AS "ORDRR_NM", '+
      'o."ORD_DT" AS "ORD_DT", '+
      'op."ORD_STATE" AS "ORD_STATE", '+
      'o."RCVR_NM" AS "RCVR_NM", '+
      'o."RCVR_TELNO" AS "RCVR_TELNO", '+
      'o."RCVR_ZIPN" AS "RCVR_ZIPN", '+
      'o."RCVR_BSC_ADDR" AS "RCVR_BSC_ADDR", '+
      'o."RCVR_DTL_ADDR" AS "RCVR_DTL_ADDR", '+
      'o."ORD_QTY" AS "ORD_QTY", '+
      'p."GDS_PRC" AS "GDS_PRC", '+
      'opt."OPTION_NM" AS "OPTION_NM", '+
      'opt."OPTION_PRC" AS "OPTION_PRC", '+
      'o."DLV_PRC" AS "DLV_PRC" '+
    'FROM orders as o '+
      'INNER JOIN shop AS s ON s."SHOP_ID" = o."SHOP_ID" '+
      'INNER JOIN order_product AS op ON op."ORD_ID" = o."ORD_ID" '+
      'INNER JOIN product AS p ON p."GDS_ID" = op."GDS_ID" '+
      'LEFT JOIN order_product_option AS opp ON opp."ORD_GDS_ID" = op."ORD_GDS_ID" '+
      'LEFT JOIN option AS opt ON opt."OPTION_ID" = opp."OPTION_ID" '+
    'WHERE o."SHOP_ID" = $1',
    [owner_id]
  );
}
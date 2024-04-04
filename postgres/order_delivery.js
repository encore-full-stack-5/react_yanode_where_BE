const pg = require("./pg_query_modul");

/**
 *
 * @param {*} ord_id
 * @returns
 */
exports.getDeliveryByOrderId = (ord_id) => {
  return pg.getQuery(`SELECT * FROM delivery where "ORD_ID" = $1 `, [ord_id]);
};

exports.createDelivery = (props) => {
  return pg.updateQuery(
    `INSERT INTO delivery ("ORD_ID","DLV_STATE") values ($1, $2)`,
    [...props]
  );
};

exports.updateDeliberyByOrderId = (dlv_state) => {
  return pg.updateQuery(
    `UPDATE delivery SET  "DLV_STATE"= $2,  WHERE "GDS_ID" = $1`,
    [dlv_state]
  );
};

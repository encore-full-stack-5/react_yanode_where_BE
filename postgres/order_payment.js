const pg = require("./pg_query_modul");

exports.getPaymentByOrderId = (ord_id) => {
  return pg.getQuery(`SELECT * FROM payment where "ORD_ID" = $1 `, [ord_id]);
};

exports.createPayment = (props) => {
  return pg.updateQuery(
    `INSERT INTO payment ("ORD_ID","PAY_NM","PAY_TYP") values ($1, $2,$3)`,
    [props]
  );
};

exports.updatePaymentByOrderId = (props) => {
  return pg.updateQuery(
    `UPDATE payment SET  "PAY_NM"= $2, "PAY_TYP" =$3, WHERE "PAY_ID" = $1`,
    [props]
  );
};

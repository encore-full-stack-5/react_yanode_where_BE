const pg = require("./pg_query_modul");

exports.getOptionsByGoodsId = (gds_id) => {
  return pg.getQuery("", []);
};

exports.getAvailableOptionsByGoodsId = (gds_id) => {
  return pg.getQuery("", []);
};

exports.updateOptionByOptionId = (option_id) => {
  return pg.updateQuery("", []);
};

exports.disalbeOptionByOptionId = (option_id) => {
  return pg.updateQuery("", []);
};

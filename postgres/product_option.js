const pg = require('./pg_query_modul');

exports.getAllOptionsByGoodsId = (gds_id) => {
  return pg.getQuery('SELECT * FROM option WHERE "GDS_ID" = $1', [gds_id]);
};

exports.getAvailableOptionsByGoodsId = (gds_id) => {
  return pg.getQuery(
    'SELECT '+
      '"OPTION_ID", '+
      '"OPTION_NM", '+
      '"OPTION_PRC", '+
      '"SOLDOUT_YN" '+
    'FROM option '+
    'WHERE '+
      '"GDS_ID" = $1 AND "EXPSR_YN" = \'1\' AND "USE_YN" = \'1\''
    , [gds_id]);
};

exports.updateOptionByOptionId = (props) => {
  return pg.updateQuery('UPDATE option SET "OPTION_NM" = $1, "OPTION_PRC" = 2$, "SOLDOUT_YN" = $3, "EXPSR_YN" = $4', [...props]);
};

exports.disalbeOptionByOptionId = (option_id) => {
  return pg.updateQuery('UPDATE option SET "USE_YN" = 0 WHERE "OPTION_ID" = $1', [option_id]);
};

exports.createOptionsByGoodsId = (props) => {
  return pg.updateQuery(
    'INSERT INTO option'+
      '(GDS_ID, OPTION_NM, OPTION_PRC, SOLDOUT_YN, EXPSR_YN, USE_YN) '+
    'VALUES '+
      '($1, $2, $3, $4, $5, $6)'
    ,[...props]
  );
}
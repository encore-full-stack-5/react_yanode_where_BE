const pg = require("./pg_query_modul");

//useyn같은 필요없는거 제외하는 수정필요
/**
 * `Shop`Table에서 데이터ID와 일치하는 매장의 정보를 반환합니다.
 * @param {*} shop_id - 매장 ID
 * @returns 해당 `Shop`의 정보가 모두 담긴 JSON
 */
exports.getShopBySHOP_ID = (shop_id) => {
  return pg.getQuery('SELECT * FROM shop where "SHOP_ID" = $1', [shop_id]);
};

/**
 * `Shop`Table에서 계정명과 일치하는 매장의 목록을 반환합니다.
 * @param {*} owner_id - 계정명
 * @returns 해당 `Shop`의 정보가 모두 담긴 JSON List
 */
exports.getShopListByOWNER_ID = (owner_id) => {
  return pg.getQuery('SELECT * FROM shop where "OWNER_ID" = $1', [owner_id]);
};

/**
 * `Shop`Table에서 카테고리가 일치하는 매장의 목록을 반환합니다.
 * @param {*} ctgry - 카테고리 이름
 * @returns 해당 `Shop`의 리스트가 담긴 JSON List
 */
exports.getShopListByCTGRY = (ctgry) => {
  return pg.getQuery('SELECT * FROM shop where "CTGRY" = $1', [ctgry]);
};

/**
 * `Shop`Table에서 이름이 일치하는 매장의 목록을 반환합니다.
 * @param {*} shop_nm - 매장 이름
 * @returns 해당 `Shop`의 정보가 모두 담긴 Json
 */
exports.getShopSearchBySHOP_NM = (shop_nm) => {
  return pg.getQuery('SELECT * FROM shop where "SHOP_NM" = $1', [shop_nm]);
};

//검색도 만들?까

/**
 * `[OWNER_ID, SHOP_NM, CTGRY, ZIPN, BSC_ADDR, DTL_ADDR, SHOP_DESC, OPEN_TIME, CLOSE_TIME, IMG, TELNO]`
 * @param {*} props - `Shop` 생성에 필요한 모든 정보
 * @returns `<return>.rowcount = 1`
 */
exports.createNewShop = (props) => {
  return pg.updateQuery(
    'INSERT INTO shop("OWNER_ID", "SHOP_NM", "CTGRY", "ZIPN", "BSC_ADDR", "DTL_ADDR", "SHOP_DESC", "OPEN_TIME", "CLOSE_TIME", "IMG", "TELNO", "REG_DT", "USE_YN") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, now(), 1)',
    [...props]
  );
};

/**
 * `[SHOP_ID, OWNER_ID, SHOP_NM, CTGRY, ZIPN, BSC_ADDR, DTL_ADDR, SHOP_DESC, OPEN_TIME, CLOSE_TIME, IMG]`
 * @param {*} props - 업데이트할 내역을 포함한 `Shop`의 전체 Info
 * @returns `<return>.rowcount = 1`
 */
exports.updateShopInfoAllBySHOP_ID = (props) => {
  return pg.updateQuery(
    'UPDATE shop SET "OWNER_ID" = $2, "SHOP_NM" = $3, "CTGRY" = $4, "ZIPN" = $5, "BSC_ADDR" = $6, "DTL_ADDR" = $7, "SHOP_DESC" = $8, "OPEN_TIME" = $9, "CLOSE_TIME" = $10, "IMG" = $11 WHERE "SHOP_ID" = $1',
    [...props]
  );
};

/**
 * 해당 `Shop`의 `USE_YN`을 `0`으로 변경합니다.
 * @param {*} shop_id - 고객 ID
 * @returns `<return>.rowcount = 1`
 */
exports.disableShopBySHOP_ID = (shop_id) => {
  return pg.updateQuery("UPDATE shop SET USE_YN = 0 WHERE SHOP_ID = $1", [
    shop_id,
  ]);
};

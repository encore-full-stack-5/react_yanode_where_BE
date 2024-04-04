const pg = require('./pg_query_modul');

//비번, useyn등 필요없는거 제외하는 수정필요
/**
 * `Product`Table에서 데이터ID와 일치하는 상품의 정보를 반환합니다.
 * @param {*} gds_id - 상품 ID
 * @returns 해당 `Product`의 정보가 모두 담긴 JSON
 */
exports.getProductByORD_ID = (gds_id) =>{
    return pg.getQuery('SELECT * FROM product where "GDS_ID" = $1', [gds_id]);
}

//비번, useyn등 필요없는거 제외하는 수정필요
/**
 * `Product`Table에서 매장ID가 일치하는 상품의 목록을 반환합니다.
 * @param {*} shop_id - 매장 ID
 * @returns 해당 `Product`의 리스트가 담긴 JSON List
 */
exports.getProductListBySHOP_ID = (shop_id) =>{
    return pg.getQuery('SELECT * FROM product where "SHOP_ID" = $1', [shop_id]);
}

/**
 * `Product`Table에서 매장ID가 일치하는 상품의 목록중,
 * 노출 여부가 `True`인 상품만 반환합니다.
 * @param {*} shop_id - 매장 ID
 * @returns 해당 `Product`의 리스트가 담긴 JSON List
 */
exports.getProductBySHOP_IDAndIsEXPSR_YN = (shop_id) =>{
    return pg.getQuery('SELECT * FROM product where "EXPSR_YN" = $1 AND "SHOP_ID" = $2', ["1", shop_id])
}

/**
 * `[SHOP_ID, GDS_NM, GDS_PRC, GDS_DESC, IMG, SOLDOUT_YN, EXPSR_YN]
 * @param {*} props - `Product`생성에 필요한 모든 정보
 * @returns `<return>.rowcount = 1`
 */
exports.createNewProduct = (props) =>{
    return pg.updateQuery(`INSERT INTO product("SHOP_ID","GDS_NM","GDS_PRC","GDS_DESC","IMG","SOLDOUT_YN","EXPSR_YN","USE_YN") values ($1, $2, $3, $4, $5, $6, $7, 1)`, [...props])
} 

/**
 * `[GDS_ID, GDS_NM, GDS_PRC, GDS_DESC, IMG, SOLDOUT_YN, EXPSR_YN]`
 * @param {*} props - 업데이트할 내역을 포함한 `Product`의 전체 Info
 * @returns `<return>.rowcount = 1`
 */
exports.updateProductInfoByGDS_ID = (props) =>{
    return pg.updateQuery(`UPDATE product SET  "GDS_NM" = $2, "GDS_PRC" = $3, "GDS_DESC" = $4, "IMG" = $5, "SOLDOUT_YN" = $6, "EXPSR_YN" = $7  WHERE "GDS_ID" = $1`, [...props])
}

/**
 * 해당 `Product`의 `USE_YN`을 `0`으로 변경합니다.
 * @param {*} gds_id - 상품 ID
 * @returns `<return>.rowcount = 1`
 */
exports.disableProductYNByGDS_ID = (gds_id) =>{
    return pg.updateQuery('UPDATE product SET "USE_YN" = 0 WHERE "GDS_ID" = $1', [gds_id]);
}

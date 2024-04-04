const pg = require("./pg_query_modul");

//비번, useyn등 필요없는거 제외하는 수정필요
/**
 * `Owner`Table에서 데이터ID와 일치하는 사업자의 정보를 반환합니다.
 * @param {*} owner_id - 사업자 ID
 * @returns 해당 `Owner`의 정보가 모두 담긴 JSON
 */
exports.OwnerByOwnerId = (owner_id) => {
  return pg.getQuery('SELECT * FROM owner where "OWNER_ID" = $1', [owner_id]);
};

//비번, useyn등 필요없는거 제외하는 수정필요
/**
 * `Owner`Table에서 계정명과 일치하는 사업자의 정보를 반환합니다.
 * @param {*} lgn_id - 계정명
 * @returns 해당 `Owner`의 정보가 모두 담긴 JSON
 */
exports.OwnerByLogInId = (lgn_id) => {
  return pg.getQuery('SELECT * FROM owner where "LGN_ID" = $1', [lgn_id]);
};

/**
 * `Owner`Table을 받아온 param을 조건으로 `SELECT`한 결과를 반환합니다.
 * @param {*} lgn_id - 계정명
 * @param {*} passwd - 암호
 * @returns if correct `\<return>.rowcount = 1`, else `\<return>.rowcount = 0`
 */
exports.OwnerByLogInIdAndPw = (lgn_id, passwd) => {
  return pg.getQuery(
    'SELECT * FROM owner where "LGN_ID" = $1 AND "PASSWD" = $2',
    [lgn_id, passwd]
  );
};

/**
 * `[LGN_ID, PASSWD, OWNER_NM, TELNO, ZIPN, BSC_ADDR, DTL_ADDR, GENDER, EMAIL, BRNO]`
 * @param {*} props - `Owner`생성에 필요한 모든 정보가 포함되야 합니다.
 * @returns `\<return>.rowcount = 1`
 */
exports.createNewOwner = (props) => {
  return pg.updateQuery(
    'INSERT INTO owner("LGN_ID", "PASSWD", "OWNER_NM", "TELNO", "ZIPN", "BSC_ADDR", "DTL_ADDR", "GENDER", "EMAIL", "BRNO", "APRV_STS_CD", "JOIN_DT", "USE_YN") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 0, now(), 1)',
    [...props]
  );
};

/**
 * `[OWNER_ID, OWNER_NM, TELNO, ZIPN, BSC_ADDR, DTL_ADDR, GENDER, EMAIL, BRNO]`
 * @param {*} props - 업데이트할 내역을 포함한 `Owner`의 전체 Info가 필요합니다.
 * @returns `\<return>.rowcount = 1`
 */
exports.updateOwnerInfoAllByOwnerId = (props) => {
  return pg.updateQuery(
    'UPDATE owner SET "OWNER_NM" = $2, "TELNO" = $3, "ZIPN" = $4, "BSC_ADDR" = $5, "DTL_ADDR" = $6, "GENDER" = $7, "EMAIL" = $8, "BRNO" = $9 WHERE "OWNER_ID" = $1',
    [...props]
  );
};

/**
 * 해당 `Owner`의 `APRV_STS_CD`를 `1`로 변경하고 `APRV_DT`에 현재시각을 기록합니다.
 * @param {*} owner_id - 사업자 ID
 * @returns `\<return>.rowcount = 1`
 */
exports.acceptOwnerApproval = (owner_id) => {
  return pg.updateQuery(
    'UPDATE owner SET "APRV_STS_CD" = 1, "APRV_DT" = now() WHERE "OWNER_ID" = $1',
    [owner_id]
  );
};

/**
 * 해당 `Owner`의 `USE_YN`을 `0`으로 변경하고 `WHDW_DT`에 현재시각을 기록합니다.
 * @param {*} owner_id  - 사업자 ID
 * @returns `\<return>.rowcount = 1`
 */
exports.disableOwnerByOwnerId = (owner_id) => {
  return pg.updateQuery(
    'UPDATE owner SET "USE_YN" = 0, "WHDW_DT" = now() WHERE "OWNER_ID" = $1',
    [owner_id]
  );
};

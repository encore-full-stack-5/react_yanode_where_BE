const express = require("express");
const router = express.Router();

const shop = require("../../postgres/shop");

// owner 상품 관리
router
  .route("/:ownerId")
  .get(async (req, res) => {
    console.log("owner 본인 소유 매장 조회");
    const result = await shop.getShopListByOWNER_ID(req.params.ownerId);
    res.send(result.rows);
  })
  .post(async (req, res) => {
    console.log("owner 매장 추가");
    const {
      OWNER_ID,
      SHOP_NM,
      CTGRY,
      ZIPN,
      BSC_ADDR,
      DTL_ADDR,
      SHOP_DESC,
      OPEN_TIME,
      CLOSE_TIME,
      IMG,
      TELNO,
    } = req.body;
    const result = await shop.createNewShop([
      OWNER_ID,
      SHOP_NM,
      CTGRY,
      ZIPN,
      BSC_ADDR,
      DTL_ADDR,
      SHOP_DESC,
      OPEN_TIME,
      CLOSE_TIME,
      IMG,
      TELNO,
    ]);

    res.send("등록 성공");
  });

router.put("/:storeId/:ownerId", async (req, res) => {
  console.log("owner 매장 정보 수정");
  const {
    SHOP_ID,
    OWNER_ID,
    SHOP_NM,
    CTGRY,
    ZIPN,
    BSC_ADDR,
    DTL_ADDR,
    SHOP_DESC,
    OPEN_TIME,
    CLOSE_TIME,
    IMG,
  } = req.body;
  const result = await shop.updateShopInfoAllBySHOP_ID([
    SHOP_ID,
    OWNER_ID,
    SHOP_NM,
    CTGRY,
    ZIPN,
    BSC_ADDR,
    DTL_ADDR,
    SHOP_DESC,
    OPEN_TIME,
    CLOSE_TIME,
    IMG,
  ]);
  res.send(result.rowCount ? "owner 매장 정보 수정" : "매장 수정 실패");
});

module.exports = router;

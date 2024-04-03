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
  .post((req, res) => {
    res.send("owner 매장 추가");
  });

router.put("/:productId/:storeId", (req, res) => {
  res.send("owner 매장 정보 수정");
});

module.exports = router;

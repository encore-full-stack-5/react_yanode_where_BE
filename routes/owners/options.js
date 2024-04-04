const express = require("express");
const router = express.Router();

// owner 상품 관리
router
  .route("/:productId/:storeId")
  .get((req, res) => {
    res.send("owner 본인 소유 매장 조회");
  })
  .post((req, res) => {
    res.post("owner 매장 추가");
  })
  .put((req, res) => {
    res.post("owner 매장 추가");
  });

module.exports = router;

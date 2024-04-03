const express = require("express");
const router = express.Router();

// owner 매장 관리
router
  .route("/:storeId")
  .get((req, res) => {
    res.send("owner 특정매장의 상품 목록 조회");
  })
  .post((req, res) => {
    res.send("owner 상품 추가");
  });

router.put("/:productId/:storeId", (req, res) => {
  res.send("owner 매장 정보 수정");
});

module.exports = router;

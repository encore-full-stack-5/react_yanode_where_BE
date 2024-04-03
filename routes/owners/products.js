const express = require("express");
const router = express.Router();

// owner 상품 관리
router
  .route("/:storeId")
  .get((req, res) => {
    res.send("owner 본인 소유 매장 조회");
  })
  .post((req, res) => {
    res.send("owner 매장 추가");
  });

router.put("/:productId/:storeId", (req, res) => {
  res.send("owner 매장 정보 수정");
});

module.exports = router;

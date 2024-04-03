const express = require("express");
const router = express.Router();

// owner 상품 관리
router.get("/:storeId", (req, res) => {
  res.send("owner 매장별 주문목록 조회");
});
router.put("/:orderId/status", (req, res) => {
  res.send("owner 주문상태 update");
});
router.get("/:orderId/:storeId", (req, res) => {
  res.send("owner 주문 상세 조회");
});

module.exports = router;

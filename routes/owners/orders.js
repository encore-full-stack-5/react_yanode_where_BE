const express = require("express");
const router = express.Router();
const order = require("../../postgres/order");

// owner 상품 관리
router.get("/:storeId", async (req, res) => {
  console.log(`${req.params.storeId}매장의 주문 목록 조회입니다.`);
  const result = await order.getOrderInfoForOwnerByOwnerId(req.params.storeId);
  res.send(result.rows);
});
router.put("/:orderId/status", (req, res) => {
  res.send("owner 주문상태 update");
});
router.get("/:orderId/:storeId", (req, res) => {
  res.send("owner 주문 상세 조회");
});

module.exports = router;

const express = require("express");
const router = express.Router();
const order = require("../../postgres/order");

// owner 상품 관리
router.get("/:storeId", async (req, res) => {
  console.log(`${req.params.storeId}번 shop의 order 조회`);
  const result = await order.getOrderInfoForOwnerByOwnerId(req.params.storeId);
  res.send(result.rows);
});

router.put("/status", async (req, res) => {
  console.log(`${req.body.data[0]}번 order_product의 state 변경`);
  const result = await order.updateOrderState([...req.body.data]);
  res.send(result.rowCount?"order_product state 변경 성공":"order_product state 변경 실패");
});

module.exports = router;

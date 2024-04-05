const express = require("express");
const router = express.Router();

const order = require("../../postgres/order");

router.post("/", (req, res) => {
  res.send("주문생성 화면입니다.");
});

router.get("/:userid", async (req, res) => {
  console.log(`${req.params.userid}님 주문 목록 조회입니다.`);
  const result = await order.getOrderInfoForCustomerByCustomerId(req.params.userid);
  res.send(result.rows);
});

router.get("/:orderid/details", async (req, res) => {
  console.log(`${req.params.orderid}번 주문 상세 조회입니다.`);
  const result = await order.getOrderDetailInfoForCustomerByOrderId(req.params.orderid);
  res.send(result.rows);
});

router.get("/:orderid/details/options", async (req, res) => {
  console.log(`${req.params.orderid}번 주문 상세 옵션 조회입니다.`);
  const result = await order.getOrderDetailInfoOptionsForCustomerByOrderId(req.params.orderid);
  res.send(result.rows);
});

router.put("/:orderid/status", (req, res) => {
  res.send("주문 상세 업데이트 화면입니다");
});

module.exports = router;

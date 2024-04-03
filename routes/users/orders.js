const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("주문생성 화면입니다.");
});

router.get("/:userid", (req, res) => {
  const { userid } = req.params;
  res.send(`${userid} 님 주문 목록 조회화면입니다.`);
});

router.get("/:orderid", (req, res) => {
  const { orderid } = req.params;
  res.send(`${orderid} 주문 상세 조회화면입니다.`);
});

router.put("/:orderid/status", (req, res) => {
  res.send("주문 상세 업데이트 화면입니다");
});

module.exports = router;

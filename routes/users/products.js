const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user 상품 초기화면입니다.");
});

router.get("/:storeid", (req, res) => {
  const { storeid } = req.params;
  res.send(`${storeid}매장 상품 조회 화면입니다`);
});

module.exports = router;

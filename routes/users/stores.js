const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("매장 목록 조회 화면입니다");
});

router.get("/:storeid", (req, res) => {
  const { storeid } = req.params;
  res.send(`${storeid}매장 조회 화면입니다`);
});

router.get("/:category", (req, res) => {
  const { category } = req.params;
  res.send(`${category}카테고리 매장 조회 화면입니다`);
});

module.exports = router;

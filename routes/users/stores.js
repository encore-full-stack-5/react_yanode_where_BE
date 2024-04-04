const express = require("express");
const router = express.Router();

const shop = require("../../postgres/shop");

router.get("/", (req, res) => {
  res.send("매장 목록 조회 화면입니다");
});

router.get("/:storeId", async (req, res) => {
  console.log("user store 조회");
  const result = await shop.getShopBySHOP_ID(req.params.storeId);
  res.send(result.rows);
});

router.get("/category/:category", async (req, res) => {
  console.log("user 카테고리 일치 store  조회");
  const result = await shop.getShopListByCTGRY(req.params.category);
  res.send(result.rows);
});

module.exports = router;

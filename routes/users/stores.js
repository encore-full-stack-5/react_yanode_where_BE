const express = require("express");
const router = express.Router();

const shop = require("../../postgres/shop");

router.get("/all/:limit", async(req, res) => {
  console.log("매장 목록 조회");
  const result = await shop.getShopByLimit(req.params.limit);
  res.send(result.rows);
});

router.get("/:storeId", async (req, res) => {
  console.log(`${req.params.storeId}번 store 조회`);
  const result = await shop.getShopByShopId(req.params.storeId);
  res.send(result.rows);
});

// router.get("/category/:category", async (req, res) => {
//   console.log("user 카테고리 일치 store  조회");
//   const result = await shop.getShopListByCategory(req.params.category);
//   res.send(result.rows);
// });

module.exports = router;

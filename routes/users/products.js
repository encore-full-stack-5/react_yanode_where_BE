const express = require("express");
const router = express.Router();

const product = require("../../postgres/product");

router.get("/", (req, res) => {
  res.send("user 상품 초기화면입니다.");
});

router.get("/:storeId", async (req, res) => {
  console.log("store id의 product 조회");
  const result = await product.getProductByShopIdAndExposure(req.params.storeId);
  console.log(result.rows);
  res.send(result.rows);
});

module.exports = router;

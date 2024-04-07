const express = require("express");
const router = express.Router();

const product = require("../../postgres/product");
const option = require("../../postgres/product_option");

router.get("/:storeId", async (req, res) => {
  console.log(`${req.params.storeId}번 shop의 사용 가능 product 조회`);
  const result = await product.getProductByShopIdAndExposure(req.params.storeId);
  res.send(result.rows);
});

router.get("/menu/:goodsId", async (req, res) => {
  console.log(`${req.params.goodsId}번 product의 사용 가능 option 조회`);
  const result = await option.getAvailableOptionsByGoodsId(req.params.goodsId);
  res.send(result.rows);
});

module.exports = router;

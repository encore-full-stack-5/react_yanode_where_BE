const express = require("express");
const router = express.Router();

const product = require("../../postgres/product");

router.get("/:storeId", async (req, res) => {
  console.log(`${req.params.storeId}번 매장의 product 조회`);
  const result = await product.getProductByShopIdAndExposure(req.params.storeId);
  res.send(result.rows);
});

module.exports = router;

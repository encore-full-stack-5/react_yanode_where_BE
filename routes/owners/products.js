const express = require("express");
const router = express.Router();

const product = require("../../postgres/product");

// owner 상품 관리

router.get("/:storeId", async (req, res) => {
  console.log("owner 본인 소유 상품 조회");
  const result = await product.getProductListByShopId(req.params.storeId);
  res.send(result.rows);
});

router.post("/", async (req, res) => {
  console.log("owner 상품 추가");
  const result = await product.createNewProduct(req.body.data);
  res.send("상품 추가 성공");
});

router.put("/", async (req, res) => {
  console.log("owner 상품 정보 수정");
  const result = await product.updateProductInfoByGoodsId(req.body.data);
  res.send("상품정보 수정");
});

module.exports = router;

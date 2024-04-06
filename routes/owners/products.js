const express = require("express");
const router = express.Router();

const product = require("../../postgres/product");

// owner 상품 관리

router.get("/:storeId", async (req, res) => {
  console.log(req.params.storeId + "번 매장 상품 조회");
  const result = await product.getProductListByShopId(req.params.storeId);
  res.send(result.rows);
});

router.post("/", async (req, res) => {
  console.log(`${req.body.data[0]}번 매장 상품 추가`);
  console.log(req.body.data);
  const result = await product.createNewProduct([...req.body.data]);
  res.send(result.rowCount?"상품 추가 성공":"상품 추가 실패");
});

router.put("/", async (req, res) => {
  console.log(`${req.body.data[0]}번 상품 정보 수정`);
  console.log(req.body.data);
  const result = await product.updateProductInfoByGoodsId([...req.body.data]);
  res.send(result.rowCount?"상품 수정 성공":"상품 수정 실패");
});

module.exports = router;

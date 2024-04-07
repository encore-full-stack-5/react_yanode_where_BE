const express = require("express");
const router = express.Router();

const product = require("../../postgres/product");

// owner 상품 관리

router.get("/:storeId", async (req, res) => {
  console.log(req.params.storeId + "번 shop의 product 조회");
  const result = await product.getProductListByShopId(req.params.storeId);
  res.send(result.rows);
});

router.post("/", async (req, res) => {
  console.log(`${req.body.data[0]}번 shop에 product 추가`);
  console.log(req.body.data);
  const result = await product.createNewProduct([...req.body.data]);
  res.send(result.rowCount?"product 추가 성공":"product 추가 실패");
});

router.put("/", async (req, res) => {
  console.log(`${req.body.data[0]}번 product 정보 수정`);
  console.log(req.body.data);
  const result = await product.updateProductInfoByGoodsId([...req.body.data]);
  res.send(result.rowCount?"product 수정 성공":"product 수정 실패");
});

router.get("/del/:productId", async (req, res) => {
  console.log(`${req.params.productId}번 product 삭제`);
  const result = await product.disableProductByGoodsId(req.params.productId);
  res.send(result.rowCount?"product 삭제 성공":"product 삭제 실패");
});

module.exports = router;

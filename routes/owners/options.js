const express = require("express");
const router = express.Router();

const option = require("../../postgres/product_option");


router
  .route("/:productId")
  .post(async (req, res) => {
    await req.body.data.array.forEach(async e => {
        const result = await option.createOptionsByGoodsId([...e]);
    });
    res.send(`${req.params.productId}번 상품에 옵션 추가`);
  })
  .put(async (req, res) => {
    const result = await option.updateOptionByOptionId([...req.body.data]);
    res.send(`${req.params.productId}번 상품 옵션 변경`);
  });

module.exports = router;

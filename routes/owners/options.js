const express = require("express");
const router = express.Router();

const option = require("../../postgres/product_option");


router
  .route("/:productId")
  .post(async (req, res) => {
    await req.body.data.array.forEach(async e => {
      console.log("옵션추가?");
      const result = await option.createOptionsByGoodsId([...e]);
    });
    res.send(`${req.params.productId}번 product에 option 추가`);
  })
  .put(async (req, res) => {
    console.log("옵션변경?");
    const result = await option.updateOptionByOptionId([...req.body.data]);
    res.send(`${req.params.productId}번 product의 option 변경`);
  });

module.exports = router;

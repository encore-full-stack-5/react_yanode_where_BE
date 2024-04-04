const express = require("express");
const router = express.Router();

const product = require("../../postgres/product");

// owner 상품 관리
router
  .route("/:storeId")
  .get(async (req, res) => {
    console.log("owner 본인 소유 매장 조회");
    const result = await product.getProductListBySHOP_ID(req.params.storeId);
    res.send(result.rows);
  })
  .post(async (req, res) => {
    console.log("owner 상품 추가");
    const { GDS_NM, GDS_PRC, GDS_DESC, IMG, SOLDOUT_YN, EXPSR_YN } = req.body;
    const result = await product.createNewProduct([
      (SHOP_ID = req.params.storeId),
      GDS_NM,
      GDS_PRC,
      GDS_DESC,
      IMG,
      SOLDOUT_YN,
      EXPSR_YN,
    ]);
    res.send("상품 추가 성공");
  });

router.put("/:productId", async (req, res) => {
  console.log("owner 상품 정보 수정");
  const { GDS_NM, GDS_PRC, GDS_DESC, IMG, SOLDOUT_YN, EXPSR_YN } = req.body;
  const result = await product.updateProductInfoByGDS_ID([
    (GDS_ID = req.params.productId),
    GDS_NM,
    GDS_PRC,
    GDS_DESC,
    IMG,
    SOLDOUT_YN,
    EXPSR_YN,
  ]);
  res.send("상품정보 수정");
});

module.exports = router;

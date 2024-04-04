const express = require("express");
const router = express.Router();

const shop = require("../../postgres/shop");

// owner 상품 관리
router.get("/:ownerId", async (req, res) => {
  console.log("owner 소유 매장 리스트");
  const result = await shop.getShopListByOwnerId(req.params.ownerId);
  res.send(result.rows);
});

router.post("/", async (req, res) => {
  console.log("owner 매장 추가");
  const result = await shop.createNewShop(req.body.data);
  res.send("매장 등록 성공");
});

router.put("/", async (req, res) => {
  console.log("owner 매장 정보 수정");
  const result = await shop.updateShopInfoAllByShopId(req.body.data);
  res.send("owner 매장 정보 수정");
});

module.exports = router;

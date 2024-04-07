const express = require("express");
const router = express.Router();

const shop = require("../../postgres/shop");

// owner 상품 관리
router.get("/:ownerId", async (req, res) => {
  console.log(`${req.params.ownerId}번 owner 소유 매장 리스트`);
  const result = await shop.getShopListByOwnerId(req.params.ownerId);
  res.send(result.rows);
});

router.post("/", async (req, res) => {
  console.log(`${req.body.data[0]}번 owner의 매장 추가`);
  console.log(req.body.data);
  const result = await shop.createNewShop(req.body.data);
  res.send(result.rows?"매장 등록 성공":"매장 등록 실패");
});

router.put("/", async (req, res) => {
  console.log(`${req.body.data}번 매장 정보 수정`);
  console.log(req.body.data);
  const result = await shop.updateShopInfoAllByShopId(req.body.data);
  res.send(result.rows?"매장 수정 성공":"매장 수정 실패");
});

module.exports = router;
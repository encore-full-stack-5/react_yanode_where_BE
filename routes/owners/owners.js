const express = require("express");
const router = express.Router();

const owner = require("../../postgres/owner");

const ordersRouter = require("./orders");
const optionsRouter = require("./options");
const productsRouter = require("./products");
const storesRouter = require("./stores");

// 계정관리
router.post("/signup", async (req, res) => {
  console.log("owner 회원가입");
  const result = await owner.createNewOwner(req.body.data);
  res.send("회원가입 성공");
});


router.post("/login", async (req, res) => {
  console.log("owner 로그인");
  const result = await owner.OwnerByLogInIdAndPw(req.body.lgn_id, req.body.passwd);
  console.log(result.rows[0]);
  res.send(result.rowCount?result.rows[0]:false);
});

router.get("/profile/:ownerId", async (req, res) => {
  console.log("owner 정보 조회");
  // 잘 모르겠음 잘나오긴함
  const result = await owner.OwnerByOwnerId(req.params.ownerId);
  res.json(result.rows[0]); // 조회된 결과 중 첫 번째 행을 반환합니다.
});
router.put("/profile", async (req, res) => {
  const result = await owner.updateOwnerInfoAllByOwnerId(req.body.data);
  res.send("owner 정보 수정");
});

router.use("/orders", ordersRouter);
router.use("/options", optionsRouter);
router.use("/products", productsRouter);
router.use("/stores", storesRouter);

module.exports = router;

const express = require("express");
const router = express.Router();

const owner = require("../../postgres/owner");

const ordersRouter = require("./orders");
const optionsRouter = require("./options");
const productsRouter = require("./products");
const storesRouter = require("./stores");

// 계정관리
router.post("/signup", async (req, res) => {
  console.log(`owner ${req.body.data[0]} 회원가입`);
  const result = await owner.createNewOwner([...req.body.data]);
  res.send(result.rowCount?"owner 회원가입 성공":"owner 회원가입 실패");
});


router.post("/login", async (req, res) => {
  console.log(`${req.body.lgn_id} owner 로그인`);
  const result = await owner.OwnerByLogInIdAndPw(req.body.lgn_id, req.body.passwd);
  res.send(result.rowCount?result.rows[0]:false);
});

router.get("/profile/:ownerId", async (req, res) => {
  console.log(`${req.params.ownerId}번 owner 정보 조회`);
  const result = await owner.OwnerByOwnerId(req.params.ownerId);
  res.json(result.rows[0]);
});

router.put("/profile", async (req, res) => {
  console.log(`${req.body.data[0]} owner의 정보 수정`);
  const result = await owner.updateOwnerInfoAllByOwnerId(req.body.data);
  res.send(result.rows?"owner 정보 수정 성공":"owner 정보 수정 실패");
});

router.use("/orders", ordersRouter);
router.use("/options", optionsRouter);
router.use("/products", productsRouter);
router.use("/stores", storesRouter);

module.exports = router;

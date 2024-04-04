const express = require("express");
const router = express.Router();

const ordersRouter = require("./orders");
const optionsRouter = require("./options");
const productsRouter = require("./products");
const storesRouter = require("./stores");

// 계정관리
router.post("/signup", (req, res) => {
  res.send("owner 회원가입");
});

router.post("/login", (req, res) => {
  res.send("owner 로그인");
});

router.post("/logout", (req, res) => {
  res.send("owner 로그아웃");
});

router
  .route("/profile")
  .get((req, res) => {
    res.send("owner 정보 조회");
  })
  .put((req, res) => {
    res.send("owner 정보 수정");
  });

router.use("/orders", ordersRouter);
router.use("/options", optionsRouter);
router.use("/products", productsRouter);
router.use("/stores", storesRouter);

module.exports = router;

const express = require("express");
const router = express.Router();
const storesRouter = require("./stores");
const ordersRouter = require("./orders");

router.post("/signup", (req, res) => {
  res.send("회원가입 화면입니다.");
});

router.post("/login", (req, res) => {
  res.send("로그인 화면입니다.");
});

router.post("/logout", (req, res) => {
  res.send("로그아웃 화면입니다.");
});

router
  .route("/profile")
  .get((req, res) => {
    res.send("정보조회 화면입니다.");
  })
  .post((req, res) => {
    res.send("정보수정 화면입니다.");
  });

router.use("/stores", storesRouter);
router.use("/orders", ordersRouter);

module.exports = router;

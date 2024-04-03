const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("회원가입 화면입니다.");
});

router.post("/login", (req, res) => {
  res.send("로그인 화면입니다.");
});

router.post("/logout", (req, res) => {
  res.send("로그아웃 화면입니다.");
});

router.get("/profile", (req, res) => {
  res.send("정보조회 화면입니다.");
});

router.post("/profile", (req, res) => {
  res.send("정보수정 화면입니다.");
});

router.post("/orders", (req, res) => {
  res.send("주문생성 화면입니다.");
});

router.get("/:userid/orders", (req, res) => {
  res.send("주문생성 화면입니다.");
});

module.exports = router;

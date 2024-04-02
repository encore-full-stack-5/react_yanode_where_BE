const express = require("express");
const router = express.Router();
router.get("/get", (req, res) => {
  res.send("getgetget");
});

router.post("/post", (req, res) => {
  res.send("postpost");
});
module.exports = router;

//로그인시 쓰이는 라우터
router.post("/", (req, res) => {
  res.send("postpost");
});

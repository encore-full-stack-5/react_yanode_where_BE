const express = require("express");
const router = express.Router();
const customer = require("../../postgres/customer");
const storesRouter = require("./stores");
const ordersRouter = require("./orders");
const productsRouter = require("./products");

router.post("/signup", (req, res) => {
  res.send("회원가입 화면입니다.");
});

router.post("/login", async (req, res) => {
  console.log(`${req.body.lgn_id} customer 로그인 시도`);
  const result = await customer.isCustomerByLogInIdAndPw(req.body.lgn_id, req.body.passwd);
  res.send(result.rowCount?result.rows[0]:false);
});

router.get("/profile/:cust_id", async (req, res) => {
    const result = await customer.getCustomerByCustomerId(req.params.cust_id);
    console.log(`${req.params.cust_id}번 고객의 정보 조회입니다.`);
    res.send(result.rows);
});

router.post("/edit", async (req, res) => {
    console.log(`${req.body.data[0]}번 고객 정보 수정`);
    console.log(req.body.data);
    const result = await customer.updateCustomerInfoAllByCustId([...req.body.data]);
    res.send(result.rowCount?"고객 정보 수정 성공":"고객 정보 수정 실패");
});

router.use("/stores", storesRouter);
router.use("/orders", ordersRouter);
router.use("/products", productsRouter);

module.exports = router;

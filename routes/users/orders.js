const express = require("express");
const router = express.Router();

const order = require("../../postgres/order");
const customer = require("../../postgres/customer");

router.get("/:userid", async (req, res) => {
  console.log(`${req.params.userid}님 order 목록 조회`);
  const result = await order.getOrderInfoForCustomerByCustomerId(req.params.userid);
  res.send(result.rows);
});

router.get("/:orderid/details", async (req, res) => {
  console.log(`${req.params.orderid}번 order 상세 조회`);
  const result = await order.getOrderDetailInfoForCustomerByOrderId(req.params.orderid);
  res.send(result.rows);
});

router.get("/:orderid/details/options", async (req, res) => {
  console.log(`${req.params.orderid}번 order 상세 옵션 조회`);
  const result = await order.getOrderDetailInfoOptionsForCustomerByOrderId(req.params.orderid);
  res.send(result.rows);
});

router.post("/new", async (req, res) => {
  const custId = req.body.orderData[0];
  const custNm = req.body.orderData[5];

  console.log(`${custId}번 customer의 order_num 조회`);
  const resGetOrdNo = await customer.getOrderNumByCustomerId(custId);
  if (resGetOrdNo.rowCount == 0) {
    res.send("order number 조회 실패");
    return;
  }

  const ordNo = resGetOrdNo.rows[0].ORD_NO;
  console.log(`${custId}번 customer의 order_num 갱신`);
  const resAddOrdNo = await customer.addOrderNumByCustomerId(custId, ordNo);
  if (resAddOrdNo.rowCount == 0) {
    res.send("order number 갱신 실패");
    return;
  }

  const orderData = [...req.body.orderData];
  const custOrdNo = orderData.pop() + ordNo;
  orderData.push(custOrdNo);
  console.log(`${custId}번 customer의 order 추가`)
  const resOrd = await order.createNewOrder([...orderData]);
  if (resOrd.rowCount == 0) {
    res.send("order 추가 실패");
    return;
  }

  console.log(`${custOrdNo}과 일치하는 order의 order_id 조회`);
  const resOrdId = await order.getOrderIDByOrderNum(custOrdNo);
  if (resOrdId.rowCount == 0) {
    res.send("order ID 조회 실패");
    return;
  }
  const ordId = resOrdId.rows[0].ORD_ID;

  console.log(`${ordNo}번 order에 product 추가`);
  await req.body.orderProductData.forEach(async (e,i) => {
    console.log(i);
    const resAddOrdGds = await order.createNewOrderProduct([ordId, ...e]);
    if (resAddOrdGds.rowCount == 0) {
      res.send("order product 추가 실패");
      return;
    }
  });

  // console.log(`${resGetOrdNo.rows[0].ORD_NO}번 order에 option 추가`);

  res.send("order 추가 성공");
});

module.exports = router;
router.get("/order/:cust_id", async (req, res) => {
  res.send(result2.rowCount?result1.rows:"order_num 조회 및 갱신 실패");
});
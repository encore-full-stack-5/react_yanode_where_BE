const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

const userRouter = require("./routes/user.js");

const cors = require("cors");

app.use(
  cors({
    origin: "*",
    credentials: false,
  })
);

app.use(express.json()); //프론트에서 받은 데이터가 json 형태이먄 json 데이터를 req.body 에 넣어준다.
app.use(express.urlencoded({ extended: true })); // 프론트에서 받은 데이터가 form형식 데이터 일때  폼데이터를 req.body 에 넣어준다.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/user", userRouter);

module.exports = router;

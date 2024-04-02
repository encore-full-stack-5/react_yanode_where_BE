const express = require('express');
const app = express();
const port = 3001;
const customer = require('./customer');

const test = async () => {
    const result = await customer.CustomerByLGN_IDAndPASSWD("asdf", "1234");
    // const result = await customer.CustomerByLGN_ID("aaaa");
    console.log(result.rows);
}
test();
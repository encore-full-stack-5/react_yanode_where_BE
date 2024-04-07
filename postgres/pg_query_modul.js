const { Client } = require("pg");

const DBinit = {
    user: "where_db_admin",
    host: "220.78.7.18",
    database: "where_db",
    password: "1234",
    port: 5432,
};

/**
 * DB와 연결하고 입력된 작업을 실행합니다.
 * 
 * Transction을 사용하지 않습니다.
 * @param {*} sql - 쿼리문 
 * @param {*} values - $에 들어가는 값
 * @returns `<return>.row = <Json>`
 */
exports.getQuery = async (sql, values) => {
    const client = new Client(DBinit);
    client.connect();
    const result = await client.query(sql, values)
    client.end();
    return result;
}

/**
 * DB와 연결하고 입력된 작업을 실행합니다.
 * 
 * Transction을 사용합니다.
 * @param {*} sql - 쿼리문 
 * @param {*} values - $에 들어가는 값
 * @returns `<return>.row = <Json>`
 */
exports.updateQuery = async (sql, values) => {
    const client = new Client(DBinit);
    let result = null;
    client.connect();
    await client.query("BEGIN");
    try{
        result = await client.query(sql, values)
        await client.query("COMMIT");
    }catch(e) {
        await client.query("ROLLBACK");
        console.log(e);
    }
    client.end();
    return result;
}


/**
 * DB와 연결하고 입력된 모든 작업을 실행합니다.
 * 
 * Transction을 사용합니다.
 * 
 * 모든 작업이 완료되기 전까지 Commit하지 않습니다.
 * @param {*} sql - 쿼리문 배열
 * @param {*} values - 쿼리 $에 들어가는 값 배열
 * @returns `<return>.row = <Json>`
 */
// exports.updateQuerys = async (sqlValues) => {
//     const client = new Client(DBinit);
//     let result = null;
//     let count = 0;
//     client.connect();
//     await client.query("BEGIN");
//     try{
//         sqlValues.forEach(async e => {
//             await e.forEach(async e => {
//                 result = await client.query(e[0], e[1]);
//                 count *= result.rowCount;
//             })
//         });
//         await client.query("COMMIT");
//     }catch(e) {
//         await client.query("ROLLBACK");
//         console.log(e);
//     }

//     client.end();
//     return count;
// }
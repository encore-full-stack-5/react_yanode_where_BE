const express = require('express');
const app = express();
const port = 3001;
const customer = require('./customer');
const owner = require('./owner');
const shop = require('./shop');
const product = require('./product');

const test = async () => {
    // const pg = require('./pg_query_modul');
    // const result = await pg.getQuery("SELECT now()", []);
    
    // const result = await owner.createNewOwner(["asdf","1234", "킹미람", "01011112222", "10100", "서울시 강남구 개쩌는길 77번길 7", "72층", "2", "itme@test.com","9876543210"]);
    // console.log(result.rowCount);

    // const result = await shop.createNewShop(["2", "있는거 빼고 다 있는 가게", "만물상", "10200", "서울시 종로구 노른자길 44", "삐까뻔쩍빌딩 1층", "안팝니다~ 돌아가세여~", "0001-01-01 10:30:00.000000", "0001-01-01 22:00:00.000000", "", "01077778888"]);
    // console.log(result.rowCount);
    
    // let result = await product.createNewProduct(["7", "광선검", "1150000", "당신도 제다이가 될 수 있습니다!", "", "0", "1"]);
    // console.log(result.rowCount);
    // result = await product.createNewProduct(["7", "떡볶이", "3500", "마시쪙", "", "0", "1"]);
    // console.log(result.rowCount);
    // result = await product.createNewProduct(["7", "커피", "2100", "사회인의 필수품", "", "0", "1"]);
    // console.log(result.rowCount);
    // result = await product.createNewProduct(["7", "살빼는약", "39850", "효과는 보장못합니다", "", "1", "1"]);
    // console.log(result.rowCount);
    // result = await product.createNewProduct(["7", "뭔가아무튼이름이엄청긴상품이필요해보여서", "1", "상품 이름 제한은 20 글자지만 설명은 255 글자 제한이라 상당히 긴 내용을 적을 수 있다. 이렇게 긴 상품 설명을 적어내는 사장이 있을지는 모르겠지만 그래도 한번 테스트는 해봐야겠지? 꺄르륵 현서바보 미람바보 진석바보 희서바보", "", "0", "0"]);
    // console.log(result.rowCount);
    // result = await product.createNewProduct(["7", "영어책", "18500", "원어민 ㅇ희서씨가 직접 참여한 소문의 그 책!", "", "1", "0"]);
    // console.log(result.rowCount);
    // result = await product.createNewProduct(["7", "자바책", "50", "이걸 읽는다고 실력이 늘까?", "", "0", "1"]);
    // console.log(result.rowCount);
    // result = await product.createNewProduct(["7", "안팖", "99999999", "너한테는안팖", "", "0", "1"]);
    // console.log(result.rowCount);
    // result = await product.createNewProduct(["7", "안보이는상품", "50000", "나 여기 어둠속에 있다....", "", "0", "0"]);
    // console.log(result.rowCount);
    // result = await product.createNewProduct(["7", "다팔림", "1000", "아무튼 인기가 좋아서 벌서 다 팔려버렸습니다!", "", "1", "0"]);
    // console.log(result.rowCount);
}
test();
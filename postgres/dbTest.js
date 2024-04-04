const express = require("express");
const app = express();
const port = 3001;
const customer = require("./customer");
const owner = require("./owner");
const shop = require("./shop");
const product = require("./product");

const test = async () => {
  // const pg = require('./pg_query_modul');
  // const result = await pg.getQuery("SELECT now()", []);

  //Create test data

  //   const result = await customer.createNewCustomer([
  //     "spongebob",
  //     "1234",
  //     "스폰지밥",
  //     "01058745644",
  //     "325647",
  //     "비키니 시티 집게리아 근처 파인애플집",
  //     "1층",
  //     "1",
  //     "1986-07-14",
  //     "spngbb@ga.com",
  //   ]);

  const result = await customer.createNewCustomer([
    "shinzzang",
    "1234",
    "신짱구",
    "02123456",
    "99999",
    "일본 사이타마현 카스카베시 ",
    "2층",
    "1",
    "2005-05-05",
    "shinz@gu.com",
  ]);
  console.log(result.rowCount);

  //확인

  //   const s = await customer.getCustomerByLGN_ID("spongebob");
  //   console.log(s.rows);
  // 입력
  //   console.log(result.rowCount);
  // 사장 만들기

  //   const result = await owner.createNewOwner([
  //     "crab",
  //     "5656",
  //     "집게사장",
  //     "01052367894",
  //     "26578",
  //     "집게리아 ",
  //     "1층",
  //     "1",
  //     "claw@test.com",
  //     "88888888",
  //   ]);
  //   console.log(result.rowCount);

  //   const result = await owner.createNewOwner([
  //     "plankton",
  //     "0000",
  //     "플랭크톤",
  //     "01088882222",
  //     "13569",
  //     "미끼식당 ",
  //     "1층",
  //     "1",
  //     "plankton@test.com",
  //     "1269875632",
  //   ]);
  //   console.log(result.rowCount);
  //   const s = await owner.OwnerByLGN_ID("plankton");
  //   console.log(s.rows); (ownerid:34)

  // shopid shrek:30,crab:31,허경영:33,플랑크톤:36

  //   const s = await shop.getShopListByOWNER_ID("34");
  //   console.log(s.rows);

  //가게 추가

  //   const result = await shop.createNewShop(["2", "있는거 빼고 다 있는 가게", "만물상", "10200", "서울시 종로구 노른자길 44", "삐까뻔쩍빌딩 1층", "안팝니다~ 돌아가세여~", "0001-01-01 10:30:00.000000", "0001-01-01 22:00:00.000000", "", "01077778888"]);
  //   console.log(result.rowCount);

  //   const result = await shop.createNewShop([
  //     "26",
  //     "녹색괴물의 고기집",
  //     "식당",
  //     "56987",
  //     "아마존 정글 안쪽",
  //     " 큰 나무 옆",
  //     "당나귀 고기 안팝니다",
  //     "0001-01-01 10:30:00.000000",
  //     "0001-01-01 10:30:00.000000",
  //     "",
  //     "12-5687-895",
  //   ]);
  //   console.log(result.rowCount);

  //   const result = await shop.createNewShop([
  //     "34",
  //     "미끼식당",
  //     "식당",
  //     "56562",
  //     "비키니시티",
  //     "집게리아 옆",
  //     "게살버거보다 맛있는 버거집",
  //     "0001-01-01 10:30:00.000000",
  //     "0001-01-01 10:30:00.000000",
  //     "",
  //     "122-887-895",
  //   ]);
  //   console.log(result.rowCount);

  //   const result = await shop.createNewShop([
  //     "29",
  //     "집게리아",
  //     "식당",
  //     "256978",
  //     "비키니시티",
  //     " 스폰지밥로 38",
  //     "팁은 필수",
  //     "0001-01-01 10:30:00.000000",
  //     "0001-01-01 10:30:00.000000",
  //     "",
  //     "356-547-44",
  //   ]);
  //   console.log(result.rowCount);

  //   const result = await shop.createNewShop([
  //     "27",
  //     "공중부양 학원",
  //     "교육기관",
  //     "89546",
  //     "서울시 노원구",
  //     "노원로10",
  //     "공중부양을 배웁시다",
  //     "0001-01-01 10:30:00.000000",
  //     "0001-01-01 10:30:00.000000",
  //     "",
  //     "89-333-44",
  //   ]);
  //   console.log(result.rowCount);
  // 메뉴 생성
  //   const result = await product.createNewProduct([
  //     "30",
  //     "삽겹살",
  //     15000,
  //     "맛있는 삼겹살",
  //     "img",
  //     "n",
  //     "y",
  //   ]);
  //   console.log(result.rowCount);

  // 메뉴 추가
  //   const result = await product.createNewProduct([
  //     "36",
  //     "피클튀김",
  //     2500,
  //     "맛있는 피클튀김",
  //     "img",
  //     "n",
  //     "y",
  //   ]);
  //   console.log(result.rowCount);

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

  //Owner Test
  // const result = await owner.OwnerByOWNER_ID("2");
  // console.log(result.rows);
  // const result = await owner.OwnerByLGN_ID("asdf");
  // console.log(result.rows);
  // const result = await owner.OwnerByLGN_IDAndPASSWD("asdf", "1234");
  // console.log(result.rows);
  // const result = await owner.OwnerByLGN_IDAndPASSWD("asdf", "4321");
  // console.log(result.rows);
  // const result = await owner.updateOwnerInfoAllByOWNER_ID(["2", "킹황미람", "1011112222", "1001", "서울시 강남구 개쩌는길 77번길 7", "72층", "2", "itme@test.com", "9876543210"]);
  // console.log(result.rowCount);
  // const result = await owner.acceptOwnerApproval("24");
  // console.log(result.rowCount);
  // const result = await owner.disableOwnerByOWNER_ID("24");
  // console.log(result.rowCount);

  //Customer Test
  // const result = await customer.getCustomerByCUST_ID("11");
  // console.log(result.rows);
  // const result = await customer.getCustomerByLGN_ID("abcd");
  // console.log(result.rows);
  // const result = await customer.isCustomerByLGN_IDAndPASSWD("abcd", "0000");
  // console.log(result.rowCount);
  // const result = await customer.updateCustomerInfoAllByCUST_ID(["11", "치킨", "01033334444", "50000", "서울시 서초구 플레이데이터", "1층", "1", "1999-01-01", "ggami@gmail.com"]);
  // console.log(result.rowCount);
  // const result = await customer.disableCustopmerByCUST_ID("11");
  // console.log(result.rowCount);

  //Product test
  // const res = await product.getProductByORD_ID("18");
  // console.log(res.rows);
  // const res = await product.getProductListBySHOP_ID("7");
  // console.log(res.rows);
  // const res = await product.getProductBySHOP_IDAndIsEXPSR_YN("7");
  // console.log(res.rows);
  // const res = await product.updateProductInfoByGDS_ID(["16", "찐-한 커피", "2100", "사회인의 생명줄", "", "0", "1"]);
  // console.log(res.rowCount);
};
test();

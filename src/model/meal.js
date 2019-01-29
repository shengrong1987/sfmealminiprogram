import wepy from 'wepy'

let meals = [
  {
  "_id": "5bd01c95ea4ff1c441215927",
  "dishes" : [
    {
  "_id": "5bbc34b9345fa9190e4c509a",
  "title": "原味绿豆糕",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1539060921239-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "8块",
  "description": "新鲜绿豆经过泡发蒸煮研磨多道工序制作成型，口感细腻，甜度适中。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539060921823),
  "updatedAt": new Date(1546828996465),
  "tag": "limited",
  "tags": [
    "select",
    "dessert"
  ],
  "peopleServe": "1",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bbc36de345fa9190e4c509b",
  "title": "蔓越莓雪花酥",
  "title-en": "",
  "price": 6.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1539061465688-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "9块",
  "description": "这款网红雪花酥，有坚果，蔓越莓，饼干，具有丰富的层次感明，甜而不腻。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539061470395),
  "updatedAt": new Date(1546829016603),
  "tag": "limited",
  "tags": [
    "dessert",
    "select"
  ],
  "peopleServe": "1",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bbc3f42345fa9190e4c509d",
  "title": "嘉兴大肉粽",
  "title-en": "",
  "price": 7,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540340226431-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "2个",
  "description": "徐记私房的大肉粽都是在接到订单才开始准备现包的，粽子选用优质的圆糯米肥瘦相间的五花肉，肥而不腻，每个粽子的份量都在227克以上。建议冷冻保存，蒸或煮加热，。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539063618371),
  "updatedAt": new Date(1546816933882),
  "tag": "limited",
  "tags": [
    "frozen"
  ],
  "peopleServe": "2",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bcfe92eea4ff1c441215910",
  "title": "鲜肉月饼",
  "title-en": "",
  "price": 12,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540352301565-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "四个",
  "description": "一盒四个，不用排队去上海，在湾区也能吃到正宗美味的鲜肉月饼。徐记私房的鲜肉月饼皮薄馅足，酥到掉渣，鲜肉加榨菜味道更加鲜美。温馨提示：食用前一定要加热！加热！加热！冰箱41F冷藏保存，最佳赏味期24小时内。加热方式：烤箱300F，3-5分钟即可。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tags": [
    "frozen"
  ],
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540352302107),
  "updatedAt": new Date(1546816949574),
  "tag": "limited",
  "peopleServe": "2",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bd9137d124da58022eb0b77",
  "title": "上海咸肉菜饭",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540952956798-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "rice&noodle",
  "quantity": "16oz一碗",
  "description": "小时候妈妈的味道，用青菜咸肉香肠，白米精心烹制，咸香扑鼻，米饭软糯。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tag": "limited",
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540952957381),
  "updatedAt": new Date(1542080693381),
  "tags": [

  ]
},
{
  "_id": "5bd9149f124da58022eb0b78",
  "title": "豌豆饭",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540953247563-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "entree",
  "quantity": "16oz一碗",
  "description": "江南一带保留着立夏吃豌豆饭的习俗，徐记私房的豌豆饭，用料考究，白米、糯米，咸肉，香肠，笋和豌豆，经过精心烹制，豌豆饭，口感软糯，色泽诱人。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tag": "limited",
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540953247926),
  "updatedAt": new Date(1541048514559),
  "tags": [

  ]
}
  ],
  "status": "on",
  "provideFromTime": new Date("2019-01-26T00:00:00-0800"),
  "provideTillTime": new Date("2019-01-30T12:00:00-0800"),
  "pickups": [
    {
      "pickupFromTime": "2019-02-01T01:30:00.000Z",
      "pickupTillTime": "2019-02-01T02:30:00.000Z",
      "location": "4175 Mission Street San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Francisco 94112",
      "comment": "",
      "deliveryCenter": "4175 Mission St, San Francisco, CA 94112美国",
      "deliveryRange": 2,
      "area": "SFSU & CCSF",
      "county": "San Francisco County",
      "index": 1,
      "nickname": "周四晚上",
      "createdAt": "2018-11-12T18:58:11.725Z",
      "updatedAt": "2019-01-27T06:29:09.682Z",
      "lat": "37.730374",
      "long": "-122.42894060000003",
      "year": "2019",
      "month": "1",
      "day": "24",
      "amPm": "pm",
      "hour12": "6",
      "minute": "30",
      "id": "5be9cd43e0c0737d44b19f91"
    },
    {
      "pickupFromTime": "2019-02-01T02:30:00.000Z",
      "pickupTillTime": "2019-02-01T03:30:00.000Z",
      "location": "1355 Market Street San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Francisco 94103",
      "comment": "",
      "deliveryCenter": "1355 Market St, San Francisco, CA 94103美国",
      "deliveryRange": 2,
      "area": "Market and Downtown",
      "county": "San Francisco County",
      "index": 2,
      "nickname": "周四晚上",
      "createdAt": "2018-11-12T18:59:40.519Z",
      "updatedAt": "2019-01-27T06:29:09.683Z",
      "lat": "37.7770861",
      "long": "-122.41669130000002",
      "year": "2019",
      "month": "1",
      "day": "17",
      "amPm": "pm",
      "hour12": "7",
      "minute": "30",
      "id": "5be9cd9ce0c0737d44b19f92"
    },
    {
      "pickupFromTime": "2019-02-01T03:00:00.000Z",
      "pickupTillTime": "2019-02-01T04:00:00.000Z",
      "location": "3251 20th Avenue San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Francisco 94132",
      "comment": "",
      "deliveryCenter": "3251 20th Ave, San Francisco, CA 94132美国",
      "deliveryRange": 4,
      "area": "SFSU & CCSF",
      "county": "San Francisco County",
      "index": 3,
      "nickname": "周四晚上",
      "createdAt": "2018-11-12T19:00:51.514Z",
      "updatedAt": "2019-01-27T06:29:09.684Z",
      "lat": "37.7280817",
      "long": "-122.47708080000001",
      "year": "2019",
      "month": "1",
      "day": "17",
      "amPm": "pm",
      "hour12": "8",
      "minute": "0",
      "id": "5be9cde3e0c0737d44b19f93"
    },
    {
      "pickupFromTime": "2019-02-01T01:30:00.000Z",
      "pickupTillTime": "2019-02-01T02:30:00.000Z",
      "location": "1600 El Camino Real South San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "South San Francisco 94080",
      "comment": "",
      "deliveryCenter": "1600 El Camino Real, South San Francisco, CA 94080美国",
      "deliveryRange": 5,
      "area": "South San Francisco & Brisbane",
      "county": "San Mateo County",
      "index": 5,
      "nickname": "周四晚上",
      "createdAt": "2018-11-12T19:03:35.753Z",
      "updatedAt": "2019-01-27T06:29:09.684Z",
      "lat": "37.6281576",
      "long": "-122.42645490000001",
      "year": "2019",
      "month": "1",
      "day": "17",
      "amPm": "pm",
      "hour12": "6",
      "minute": "30",
      "id": "5be9ce87e0c0737d44b19f95"
    },
    {
      "pickupFromTime": "2019-02-01T02:30:00.000Z",
      "pickupTillTime": "2019-02-01T03:30:00.000Z",
      "location": "221 woodrow St, Daly City, CA 94014",
      "method": "pickup",
      "phone": "4158023853",
      "publicLocation": "221 woodrow St, Daly City, CA 94014",
      "comment": "到了门口，打电话谢谢",
      "deliveryCenter": "",
      "deliveryRange": 0,
      "area": "Daly City",
      "county": "San Mateo County",
      "index": 6,
      "nickname": "周四晚上",
      "createdAt": "2018-11-12T19:04:47.305Z",
      "updatedAt": "2019-01-27T06:29:09.685Z",
      "year": "2019",
      "month": "1",
      "day": "24",
      "amPm": "pm",
      "hour12": "7",
      "minute": "30",
      "id": "5be9cecfe0c0737d44b19f96"
    },
    {
      "pickupFromTime": "2019-02-01T03:00:00.000Z",
      "pickupTillTime": "2019-02-01T04:00:00.000Z",
      "location": "901 Cherry Avenue San Bruno",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Bruno 94066",
      "comment": "",
      "deliveryCenter": "901 Cherry Ave, San Bruno, CA 94066美国",
      "deliveryRange": 10,
      "area": "San Bruno & Milbrae & Burlingame",
      "county": "San Mateo County",
      "index": 7,
      "nickname": "周四晚上",
      "createdAt": "2018-11-12T19:06:16.929Z",
      "updatedAt": "2019-01-27T06:29:09.686Z",
      "lat": "37.6276091",
      "long": "-122.42543999999998",
      "year": "2019",
      "month": "1",
      "day": "17",
      "amPm": "pm",
      "hour12": "8",
      "minute": "0",
      "id": "5be9cf28e0c0737d44b19f97"
    },
    {
      "pickupFromTime": "2019-02-01T01:30:00.000Z",
      "pickupTillTime": "2019-02-01T02:30:00.000Z",
      "location": "221 Woodrow St, Daly City, CA 94014",
      "method": "pickup",
      "phone": "4158023853",
      "publicLocation": "221 Woodrow St, Daly City, CA 94014",
      "comment": "到了门口，打电话谢谢",
      "deliveryCenter": "",
      "deliveryRange": 0,
      "area": "Daly City",
      "county": "San Mateo County",
      "index": 4,
      "nickname": "周四晚上",
      "createdAt": "2018-11-12T19:02:20.735Z",
      "updatedAt": "2019-01-27T06:29:09.696Z",
      "year": "2019",
      "month": "1",
      "day": "24",
      "amPm": "pm",
      "hour12": "6",
      "minute": "30",
      "id": "5c18089c20f46f0180043f51"
    }
  ],
  "totalQty": {
    "5bbc34b9345fa9190e4c509a": "20",
    "5bbc36de345fa9190e4c509b": "20",
    "5bfcc27b3afd7ac3799aeed2": "10",
    "5c008b223483c7d655764e46": "10"
  },
  "leftQty": {
    "5bbc34b9345fa9190e4c509a": 20,
    "5bbc36de345fa9190e4c509b": 19,
    "5bfcc27b3afd7ac3799aeed2": 9,
    "5c008b223483c7d655764e46": 6,
    "5ba2d8c9e087b6b377ba540a": null,
    "5b73339b6817f8495de957e3": null,
    "5afbbf004f1b00552a937695": null,
    "5acdc77a2dfd23b81ed42a23": null,
    "5acdc4fe2dfd23b81ed42a22": null,
    "5acdc43b2dfd23b81ed42a21": null,
    "5acdc36c2dfd23b81ed42a20": null,
    "5c1c11cf5e5dae6a4e4b50e5": null,
    "5c4e193c514203bd7e4d0a49": null,
    "5c1804c9db1275775cbf90c5": null,
    "5c180425db1275775cbf90c4": null,
    "58876161046955db3395ce41": null,
    "59d5f04826469abc0ba78b4c": null,
    "5888192829849a9109a065a2": null
  },
  "type": "preorder",
  "title": "徐记私房周四",
  "title_en": "",
  "minimalOrder": 10,
  "minimalTotal": 1,
  "cover": "5bfcc27b3afd7ac3799aeed2",
  "isDelivery": true,
  "isDeliveryBySystem": true,
  "delivery_fee": 0,
  "isShipping": false,
  "supportPartyOrder": false,
  "isSupportDynamicPrice": false,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "county": "San Francisco County+San Mateo County",
  "commission": 0.2000000000000000111,
  "isScheduled": true,
  "isPartyMode": false,
  "features": "undefined,5bbc3f42345fa9190e4c509d",
  "prepareTime": 30,
  "score": 5,
  "numberOfReviews": 2,
  "delivery_range": 4,
  "serviceFee": 0,
  "isTaxIncluded": true,
  "msg": "",
  "coverString": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1543291508008-1",
  "createdAt": new Date(1540365461693),
  "updatedAt": new Date(1548719858852),
  "subtotal": 6,
  "orders": {
    "5888192829849a9109a065a2": {
      "number": 0,
      "preference": [

      ],
      "price": "9"
    },
    "5c180425db1275775cbf90c4": {
      "number": 0,
      "preference": [

      ],
      "price": "10"
    },
    "5c1804c9db1275775cbf90c5": {
      "number": 0,
      "preference": [

      ],
      "price": "0"
    },
    "5c4e193c514203bd7e4d0a49": {
      "number": 0,
      "preference": [

      ],
      "price": "6"
    },
    "5bbc34b9345fa9190e4c509a": {
      "number": 0,
      "preference": [

      ],
      "price": "7.99"
    },
    "5bbc36de345fa9190e4c509b": {
      "number": 0,
      "preference": [

      ],
      "price": "6.99"
    },
    "5bfcc27b3afd7ac3799aeed2": {
      "number": 0,
      "preference": [

      ],
      "price": "7"
    },
    "5c008b223483c7d655764e46": {
      "number": 1,
      "preference": [
        {
          "extra": 0,
          "property": [

          ]
        }
      ],
      "price": "6"
    }
  },
  "hostEmail": "1104146557@qq.com",
  "flag": "Thursday",
  "nickname": "周四晚上"
},
{
  "_id": "5bd020d120f46f020e5dac81",
  "status": "on",
  "dishes" : [
    {
  "_id": "5bbc34b9345fa9190e4c509a",
  "title": "原味绿豆糕",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1539060921239-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "8块",
  "description": "新鲜绿豆经过泡发蒸煮研磨多道工序制作成型，口感细腻，甜度适中。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539060921823),
  "updatedAt": new Date(1546828996465),
  "tag": "limited",
  "tags": [
    "select",
    "dessert"
  ],
  "peopleServe": "1",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bbc36de345fa9190e4c509b",
  "title": "蔓越莓雪花酥",
  "title-en": "",
  "price": 6.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1539061465688-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "9块",
  "description": "这款网红雪花酥，有坚果，蔓越莓，饼干，具有丰富的层次感明，甜而不腻。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539061470395),
  "updatedAt": new Date(1546829016603),
  "tag": "limited",
  "tags": [
    "dessert",
    "select"
  ],
  "peopleServe": "1",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bbc3f42345fa9190e4c509d",
  "title": "嘉兴大肉粽",
  "title-en": "",
  "price": 7,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540340226431-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "2个",
  "description": "徐记私房的大肉粽都是在接到订单才开始准备现包的，粽子选用优质的圆糯米肥瘦相间的五花肉，肥而不腻，每个粽子的份量都在227克以上。建议冷冻保存，蒸或煮加热，。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539063618371),
  "updatedAt": new Date(1546816933882),
  "tag": "limited",
  "tags": [
    "frozen"
  ],
  "peopleServe": "2",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bcfe92eea4ff1c441215910",
  "title": "鲜肉月饼",
  "title-en": "",
  "price": 12,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540352301565-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "四个",
  "description": "一盒四个，不用排队去上海，在湾区也能吃到正宗美味的鲜肉月饼。徐记私房的鲜肉月饼皮薄馅足，酥到掉渣，鲜肉加榨菜味道更加鲜美。温馨提示：食用前一定要加热！加热！加热！冰箱41F冷藏保存，最佳赏味期24小时内。加热方式：烤箱300F，3-5分钟即可。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tags": [
    "frozen"
  ],
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540352302107),
  "updatedAt": new Date(1546816949574),
  "tag": "limited",
  "peopleServe": "2",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bd9137d124da58022eb0b77",
  "title": "上海咸肉菜饭",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540952956798-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "rice&noodle",
  "quantity": "16oz一碗",
  "description": "小时候妈妈的味道，用青菜咸肉香肠，白米精心烹制，咸香扑鼻，米饭软糯。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tag": "limited",
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540952957381),
  "updatedAt": new Date(1542080693381),
  "tags": [

  ]
},
{
  "_id": "5bd9149f124da58022eb0b78",
  "title": "豌豆饭",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540953247563-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "entree",
  "quantity": "16oz一碗",
  "description": "江南一带保留着立夏吃豌豆饭的习俗，徐记私房的豌豆饭，用料考究，白米、糯米，咸肉，香肠，笋和豌豆，经过精心烹制，豌豆饭，口感软糯，色泽诱人。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tag": "limited",
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540953247926),
  "updatedAt": new Date(1541048514559),
  "tags": [

  ]
}
  ],
  "provideFromTime": new Date("2019-01-26T00:00:00-0800"),
  "provideTillTime": new Date("2019-01-30T12:00:00-0800"),
  "pickups": [
    {
      "pickupFromTime": "2019-02-02T01:30:00.000Z",
      "pickupTillTime": "2019-02-02T02:30:00.000Z",
      "location": "4175 Mission Street San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Francisco 94112",
      "comment": "",
      "deliveryCenter": "4175 Mission St, San Francisco, CA 94112美国",
      "deliveryRange": 2,
      "area": "SFSU & CCSF",
      "county": "San Francisco County",
      "index": 1,
      "nickname": "周五晚上",
      "createdAt": "2018-11-12T18:58:11.725Z",
      "updatedAt": "2019-01-27T06:29:09.687Z",
      "lat": "37.730374",
      "long": "-122.42894060000003",
      "year": "2019",
      "month": "1",
      "day": "18",
      "amPm": "pm",
      "hour12": "6",
      "minute": "30",
      "id": "5be9d61399a46f01892ac9a1"
    },
    {
      "pickupFromTime": "2019-02-02T02:30:00.000Z",
      "pickupTillTime": "2019-02-02T03:30:00.000Z",
      "location": "1355 Market Street San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Francisco 94103",
      "comment": "",
      "deliveryCenter": "1355 Market St, San Francisco, CA 94103美国",
      "deliveryRange": 2,
      "area": "Market and Downtown",
      "county": "San Francisco County",
      "index": 2,
      "nickname": "周五晚上",
      "createdAt": "2018-11-12T18:59:40.519Z",
      "updatedAt": "2019-01-27T06:29:09.687Z",
      "lat": "37.7770861",
      "long": "-122.41669130000002",
      "year": "2019",
      "month": "1",
      "day": "18",
      "amPm": "pm",
      "hour12": "7",
      "minute": "30",
      "id": "5be9d62e99a46f01892ac9a2"
    },
    {
      "pickupFromTime": "2019-02-02T03:00:00.000Z",
      "pickupTillTime": "2019-02-02T04:00:00.000Z",
      "location": "3251 20th Avenue San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Francisco 94132",
      "comment": "",
      "deliveryCenter": "3251 20th Ave, San Francisco, CA 94132美国",
      "deliveryRange": 4,
      "area": "SFSU & CCSF",
      "county": "San Francisco County",
      "index": 3,
      "nickname": "周五晚上",
      "createdAt": "2018-11-12T19:00:51.514Z",
      "updatedAt": "2019-01-27T06:29:09.688Z",
      "lat": "37.7280817",
      "long": "-122.47708080000001",
      "year": "2019",
      "month": "1",
      "day": "18",
      "amPm": "pm",
      "hour12": "8",
      "minute": "0",
      "id": "5be9d69199a46f01892ac9a3"
    },
    {
      "pickupFromTime": "2019-02-02T01:30:00.000Z",
      "pickupTillTime": "2019-02-02T02:30:00.000Z",
      "location": "25 Washington Street Daly City",
      "method": "pickup",
      "phone": "4158023853",
      "publicLocation": "25 Washington Street Daly City",
      "comment": "到了停车场，入口在Loading Deck，打电话",
      "deliveryCenter": "",
      "deliveryRange": 0,
      "area": "Daly City",
      "county": "San Mateo County",
      "index": 4,
      "nickname": "周五晚上",
      "createdAt": "2018-11-12T19:02:20.735Z",
      "updatedAt": "2019-01-27T06:29:09.688Z",
      "year": "2019",
      "month": "1",
      "day": "18",
      "amPm": "pm",
      "hour12": "6",
      "minute": "30",
      "id": "5be9d6c699a46f01892ac9a4"
    },
    {
      "pickupFromTime": "2019-02-02T01:30:00.000Z",
      "pickupTillTime": "2019-02-02T02:30:00.000Z",
      "location": "1600 El Camino Real South San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "South San Francisco 94080",
      "comment": "",
      "deliveryCenter": "1600 El Camino Real, South San Francisco, CA 94080美国",
      "deliveryRange": 5,
      "area": "South San Francisco & Brisbane",
      "county": "San Mateo County",
      "index": 5,
      "nickname": "周五晚上",
      "createdAt": "2018-11-12T19:03:35.753Z",
      "updatedAt": "2019-01-27T06:29:09.688Z",
      "lat": "37.6653232",
      "long": "-122.44836829999997",
      "year": "2019",
      "month": "1",
      "day": "18",
      "amPm": "pm",
      "hour12": "6",
      "minute": "30",
      "id": "5be9d72d99a46f01892ac9a5"
    },
    {
      "pickupFromTime": "2019-02-02T02:30:00.000Z",
      "pickupTillTime": "2019-02-02T03:30:00.000Z",
      "location": "25 Washington Street Daly City",
      "method": "pickup",
      "phone": "4158023853",
      "publicLocation": "25 Washington Street Daly City",
      "comment": "到了停车场，入口在Loading Deck，打电话",
      "deliveryCenter": "",
      "deliveryRange": 0,
      "area": "Daly City",
      "county": "San Mateo County",
      "index": 6,
      "nickname": "周五晚上",
      "createdAt": "2018-11-12T19:04:47.305Z",
      "updatedAt": "2019-01-27T06:29:09.689Z",
      "year": "2019",
      "month": "1",
      "day": "18",
      "amPm": "pm",
      "hour12": "7",
      "minute": "30",
      "id": "5be9d75599a46f01892ac9a6"
    },
    {
      "pickupFromTime": "2019-02-02T03:00:00.000Z",
      "pickupTillTime": "2019-02-02T04:00:00.000Z",
      "location": "901 Cherry Avenue San Bruno",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Bruno 94066",
      "comment": "",
      "deliveryCenter": "901 Cherry Ave, San Bruno, CA 94066美国",
      "deliveryRange": 10,
      "area": "San Bruno & Milbrae & Burlingame",
      "county": "San Mateo County",
      "index": 7,
      "nickname": "周五晚上",
      "createdAt": "2018-11-12T19:06:16.929Z",
      "updatedAt": "2019-01-27T06:29:09.689Z",
      "lat": "37.6276091",
      "long": "-122.42543999999998",
      "year": "2019",
      "month": "1",
      "day": "18",
      "amPm": "pm",
      "hour12": "8",
      "minute": "0",
      "id": "5be9d77b99a46f01892ac9a7"
    }
  ],
  "totalQty": {
    "5bbc34b9345fa9190e4c509a": "10",
    "5bbc36de345fa9190e4c509b": "10",
    "5bfcc27b3afd7ac3799aeed2": "10",
    "5c008b223483c7d655764e46": "10"
  },
  "leftQty": {
    "5bbc34b9345fa9190e4c509a": 10,
    "5bbc36de345fa9190e4c509b": 9,
    "5bfcc27b3afd7ac3799aeed2": 9,
    "5c008b223483c7d655764e46": 10,
    "5c1804c9db1275775cbf90c5": null,
    "5c180425db1275775cbf90c4": null,
    "58876161046955db3395ce41": null
  },
  "type": "preorder",
  "title": "徐记私房周五",
  "title_en": "",
  "minimalOrder": 10,
  "minimalTotal": 1,
  "cover": "5c008b223483c7d655764e46",
  "isDelivery": true,
  "isDeliveryBySystem": true,
  "delivery_fee": 0,
  "isShipping": false,
  "supportPartyOrder": false,
  "isSupportDynamicPrice": true,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "county": "San Francisco County+San Mateo County",
  "commission": 0.2000000000000000111,
  "isScheduled": true,
  "isPartyMode": false,
  "features": "undefined,5bbc36de345fa9190e4c509b",
  "prepareTime": 30,
  "score": 5,
  "numberOfReviews": 2,
  "delivery_range": 4,
  "serviceFee": 0,
  "isTaxIncluded": true,
  "msg": "",
  "coverString": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1543539486559-1",
  "createdAt": new Date(1540365461693),
  "updatedAt": new Date(1548657291863),
  "flag": "Friday",
  "subtotal": 13.990000000000000213,
  "orders": {
    "58876161046955db3395ce41": {
      "number": 0,
      "preference": [

      ],
      "price": "25"
    },
    "5c180425db1275775cbf90c4": {
      "number": 0,
      "preference": [

      ],
      "price": "10"
    },
    "5c1804c9db1275775cbf90c5": {
      "number": 0,
      "preference": [

      ],
      "price": "0"
    },
    "5bbc34b9345fa9190e4c509a": {
      "number": 0,
      "preference": [

      ],
      "price": "7.99"
    },
    "5bbc36de345fa9190e4c509b": {
      "number": 1,
      "preference": [
        {
          "extra": 0,
          "property": [

          ]
        }
      ],
      "price": "6.99"
    },
    "5bfcc27b3afd7ac3799aeed2": {
      "number": 1,
      "preference": [
        {
          "extra": 0,
          "property": [

          ]
        }
      ],
      "price": "7"
    },
    "5c008b223483c7d655764e46": {
      "number": 0,
      "preference": [

      ],
      "price": "6"
    }
  },
  "hostEmail": "1104146557@qq.com",
  "nickname": "周五晚上"
},
{
  "_id": "5bd021b320f46f020e5dac82",
  "status": "on",
  "provideFromTime": new Date("2019-01-26T00:00:00-0800"),
  "provideTillTime": new Date("2019-01-30T12:00:00-0800"),
  "pickups": [
    {
      "pickupFromTime": "2019-02-03T01:30:00.000Z",
      "pickupTillTime": "2019-02-03T02:30:00.000Z",
      "location": "4175 Mission Street San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Francisco 94112",
      "comment": "",
      "deliveryCenter": "4175 Mission St, San Francisco, CA 94112美国",
      "deliveryRange": 2,
      "area": "SFSU & CCSF",
      "county": "San Francisco County",
      "index": 1,
      "nickname": "周六晚上",
      "createdAt": "2018-11-12T18:58:11.725Z",
      "updatedAt": "2019-01-27T06:29:09.689Z",
      "lat": "37.730374",
      "long": "-122.42894060000003",
      "year": "2019",
      "month": "1",
      "day": "19",
      "amPm": "pm",
      "hour12": "6",
      "minute": "30",
      "id": "5bea134099a46f01892ac9a9"
    },
    {
      "pickupFromTime": "2019-02-03T02:30:00.000Z",
      "pickupTillTime": "2019-02-03T03:30:00.000Z",
      "location": "1355 Market Street San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Francisco 94103",
      "comment": "",
      "deliveryCenter": "1355 Market St, San Francisco, CA 94103美国",
      "deliveryRange": 2,
      "area": "Market and Downtown",
      "county": "San Francisco County",
      "index": 2,
      "nickname": "周六晚上",
      "createdAt": "2018-11-12T18:59:40.519Z",
      "updatedAt": "2019-01-27T06:29:09.692Z",
      "lat": "37.7770861",
      "long": "-122.41669130000002",
      "year": "2019",
      "month": "1",
      "day": "19",
      "amPm": "pm",
      "hour12": "7",
      "minute": "30",
      "id": "5bea139799a46f01892ac9aa"
    },
    {
      "pickupFromTime": "2019-02-03T03:00:00.000Z",
      "pickupTillTime": "2019-02-03T04:00:00.000Z",
      "location": "3251 20th Avenue San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Francisco 94132",
      "comment": "",
      "deliveryCenter": "3251 20th Ave, San Francisco, CA 94132美国",
      "deliveryRange": 4,
      "area": "SFSU & CCSF",
      "county": "San Francisco County",
      "index": 3,
      "nickname": "周六晚上",
      "createdAt": "2018-11-12T19:00:51.514Z",
      "updatedAt": "2019-01-27T06:29:09.692Z",
      "lat": "37.7280817",
      "long": "-122.47708080000001",
      "year": "2019",
      "month": "1",
      "day": "19",
      "amPm": "pm",
      "hour12": "8",
      "minute": "0",
      "id": "5bea13c099a46f01892ac9ab"
    },
    {
      "pickupFromTime": "2019-02-03T01:30:00.000Z",
      "pickupTillTime": "2019-02-03T02:30:00.000Z",
      "location": "25 Washington Street Daly City",
      "method": "pickup",
      "phone": "4158023853",
      "publicLocation": "25 Washington Street Daly City",
      "comment": "到了停车场，入口在Loading Deck，打电话",
      "deliveryCenter": "",
      "deliveryRange": 0,
      "area": "Daly City",
      "county": "San Mateo County",
      "index": 4,
      "nickname": "周六晚上",
      "createdAt": "2018-11-12T19:02:20.735Z",
      "updatedAt": "2019-01-27T06:29:09.692Z",
      "year": "2019",
      "month": "1",
      "day": "19",
      "amPm": "pm",
      "hour12": "6",
      "minute": "30",
      "id": "5bea14b799a46f01892ac9ac"
    },
    {
      "pickupFromTime": "2019-02-03T01:30:00.000Z",
      "pickupTillTime": "2019-02-03T02:30:00.000Z",
      "location": "1600 El Camino Real South San Francisco",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "South San Francisco 94080",
      "comment": "",
      "deliveryCenter": "1600 El Camino Real, South San Francisco, CA 94080美国",
      "deliveryRange": 5,
      "area": "South San Francisco & Brisbane",
      "county": "San Mateo County",
      "index": 5,
      "nickname": "周六晚上",
      "createdAt": "2018-11-12T19:03:35.753Z",
      "updatedAt": "2019-01-27T06:29:09.694Z",
      "lat": "37.6653232",
      "long": "-122.44836829999997",
      "year": "2019",
      "month": "1",
      "day": "19",
      "amPm": "pm",
      "hour12": "6",
      "minute": "30",
      "id": "5bea14dc99a46f01892ac9ad"
    },
    {
      "pickupFromTime": "2019-02-03T02:30:00.000Z",
      "pickupTillTime": "2019-02-03T03:30:00.000Z",
      "location": "25 Washington Street Daly City",
      "method": "pickup",
      "phone": "4158023853",
      "publicLocation": "25 Washington Street Daly City",
      "comment": "到了停车场，入口在Loading Deck，打电话",
      "deliveryCenter": "",
      "deliveryRange": 0,
      "area": "Daly City",
      "county": "San Mateo County",
      "index": 6,
      "nickname": "周六晚上",
      "createdAt": "2018-11-12T19:04:47.305Z",
      "updatedAt": "2019-01-27T06:29:09.694Z",
      "year": "2019",
      "month": "1",
      "day": "19",
      "amPm": "pm",
      "hour12": "7",
      "minute": "30",
      "id": "5bea14f899a46f01892ac9ae"
    },
    {
      "pickupFromTime": "2019-02-03T03:00:00.000Z",
      "pickupTillTime": "2019-02-03T04:00:00.000Z",
      "location": "901 Cherry Avenue San Bruno",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Bruno 94066",
      "comment": "",
      "deliveryCenter": "901 Cherry Ave, San Bruno, CA 94066美国",
      "deliveryRange": 10,
      "area": "San Bruno & Milbrae & Burlingame",
      "county": "San Mateo County",
      "index": 7,
      "nickname": "周六晚上",
      "createdAt": "2018-11-12T19:06:16.929Z",
      "updatedAt": "2019-01-27T06:29:09.694Z",
      "lat": "37.6276091",
      "long": "-122.42543999999998",
      "year": "2019",
      "month": "1",
      "day": "19",
      "amPm": "pm",
      "hour12": "8",
      "minute": "0",
      "id": "5bea151c99a46f01892ac9af"
    }
  ],
  "totalQty": {
    "5bbc34b9345fa9190e4c509a": "20",
    "5bbc36de345fa9190e4c509b": "20",
    "5bfcc27b3afd7ac3799aeed2": "10",
    "5c008b223483c7d655764e46": "10"
  },
  "leftQty": {
    "5bbc34b9345fa9190e4c509a": "20",
    "5bbc36de345fa9190e4c509b": "20",
    "5bfcc27b3afd7ac3799aeed2": "10",
    "5c008b223483c7d655764e46": "10"
  },
  "type": "preorder",
  "title": "徐记私房周六",
  "title_en": "",
  "minimalOrder": 10,
  "minimalTotal": 1,
  "cover": "5bbc34b9345fa9190e4c509a",
  "isDelivery": true,
  "isDeliveryBySystem": true,
  "delivery_fee": 0,
  "isShipping": false,
  "supportPartyOrder": false,
  "isSupportDynamicPrice": true,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "county": "San Francisco County+San Mateo County",
  "commission": 0.2000000000000000111,
  "isScheduled": true,
  "isPartyMode": false,
  "features": "undefined,5bbc34b9345fa9190e4c509a",
  "prepareTime": 30,
  "score": 5,
  "numberOfReviews": 0,
  "delivery_range": 4,
  "serviceFee": 0,
  "isTaxIncluded": true,
  "msg": "",
  "coverString": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1539060921239-1",
  "createdAt": new Date(1540365461693),
  "updatedAt": new Date(1548633812996),
  "subtotal": 19,
  "orders": {
    "5bbc34b9345fa9190e4c509a": {
      "number": 0,
      "preference": [

      ],
      "price": "7.99"
    },
    "5bbc36de345fa9190e4c509b": {
      "number": 0,
      "preference": [

      ],
      "price": "6.99"
    },
    "5bfcc27b3afd7ac3799aeed2": {
      "number": 1,
      "preference": [
        {
          "extra": 0,
          "property": [

          ]
        }
      ],
      "price": "7"
    },
    "5c008b223483c7d655764e46": {
      "number": 2,
      "preference": [
        {
          "extra": 0,
          "property": [

          ]
        },
        {
          "extra": 0,
          "property": [

          ]
        }
      ],
      "price": "6"
    },
    "5c31474be91c32ab67f0b76b": {
      "number": 0,
      "preference": [

      ],
      "price": "10.99"
    },
    "5c29660316ae9ab909edc0eb": {
      "number": 0,
      "preference": [

      ],
      "price": "18"
    },
    "5c33ef55a3115e194d06724f": {
      "number": 0,
      "preference": [

      ],
      "price": "30"
    },
    "5c33f5dba3115e194d067250": {
      "number": 0,
      "preference": [

      ],
      "price": "28"
    },
    "5c340b5079aae7935b90fc24": {
      "number": 0,
      "preference": [

      ],
      "price": "30"
    }
  },
  "hostEmail": "1104146557@qq.com",
  "flag": "Saturday",
  "nickname": "周六晚上"
},
{
  "_id": "5bd0ad1cea4ff1c44121592f",
  "dishes" : [
    {
  "_id": "5bbc34b9345fa9190e4c509a",
  "title": "原味绿豆糕",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1539060921239-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "8块",
  "description": "新鲜绿豆经过泡发蒸煮研磨多道工序制作成型，口感细腻，甜度适中。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539060921823),
  "updatedAt": new Date(1546828996465),
  "tag": "limited",
  "tags": [
    "select",
    "dessert"
  ],
  "peopleServe": "1",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bbc36de345fa9190e4c509b",
  "title": "蔓越莓雪花酥",
  "title-en": "",
  "price": 6.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1539061465688-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "9块",
  "description": "这款网红雪花酥，有坚果，蔓越莓，饼干，具有丰富的层次感明，甜而不腻。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539061470395),
  "updatedAt": new Date(1546829016603),
  "tag": "limited",
  "tags": [
    "dessert",
    "select"
  ],
  "peopleServe": "1",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bbc3f42345fa9190e4c509d",
  "title": "嘉兴大肉粽",
  "title-en": "",
  "price": 7,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540340226431-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "2个",
  "description": "徐记私房的大肉粽都是在接到订单才开始准备现包的，粽子选用优质的圆糯米肥瘦相间的五花肉，肥而不腻，每个粽子的份量都在227克以上。建议冷冻保存，蒸或煮加热，。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539063618371),
  "updatedAt": new Date(1546816933882),
  "tag": "limited",
  "tags": [
    "frozen"
  ],
  "peopleServe": "2",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bcfe92eea4ff1c441215910",
  "title": "鲜肉月饼",
  "title-en": "",
  "price": 12,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540352301565-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "四个",
  "description": "一盒四个，不用排队去上海，在湾区也能吃到正宗美味的鲜肉月饼。徐记私房的鲜肉月饼皮薄馅足，酥到掉渣，鲜肉加榨菜味道更加鲜美。温馨提示：食用前一定要加热！加热！加热！冰箱41F冷藏保存，最佳赏味期24小时内。加热方式：烤箱300F，3-5分钟即可。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tags": [
    "frozen"
  ],
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540352302107),
  "updatedAt": new Date(1546816949574),
  "tag": "limited",
  "peopleServe": "2",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bd9137d124da58022eb0b77",
  "title": "上海咸肉菜饭",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540952956798-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "rice&noodle",
  "quantity": "16oz一碗",
  "description": "小时候妈妈的味道，用青菜咸肉香肠，白米精心烹制，咸香扑鼻，米饭软糯。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tag": "limited",
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540952957381),
  "updatedAt": new Date(1542080693381),
  "tags": [

  ]
},
{
  "_id": "5bd9149f124da58022eb0b78",
  "title": "豌豆饭",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540953247563-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "entree",
  "quantity": "16oz一碗",
  "description": "江南一带保留着立夏吃豌豆饭的习俗，徐记私房的豌豆饭，用料考究，白米、糯米，咸肉，香肠，笋和豌豆，经过精心烹制，豌豆饭，口感软糯，色泽诱人。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tag": "limited",
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540953247926),
  "updatedAt": new Date(1541048514559),
  "tags": [

  ]
}
  ],
  "status": "on",
  "provideFromTime": new Date("2019-01-26T00:00:00-0800"),
  "provideTillTime": new Date("2019-01-30T12:00:00-0800"),
  "pickups": [
    {
      "pickupFromTime": "2019-02-02T19:00:00.000Z",
      "pickupTillTime": "2019-02-03T05:00:00.000Z",
      "location": "315 Broadway Millbrae",
      "method": "pickup",
      "phone": "4158023853",
      "publicLocation": "Millbrae 94030",
      "comment": "T4奶茶店自取，可以付现金或Venmo",
      "deliveryCenter": "",
      "deliveryRange": 0,
      "area": "San Bruno & Milbrae & Burlingame",
      "county": "San Mateo County",
      "index": 1,
      "nickname": "T4",
      "createdAt": "2018-11-14T17:14:52.401Z",
      "updatedAt": "2019-01-27T06:29:09.696Z",
      "year": "2019",
      "month": "1",
      "day": "19",
      "amPm": "pm",
      "hour12": "9",
      "minute": "0",
      "id": "5bec580cf8126d6009fa8a34"
    }
  ],
  "totalQty": {
    "5bbc34b9345fa9190e4c509a": "10",
    "5bbc36de345fa9190e4c509b": "10",
    "5bfcc27b3afd7ac3799aeed2": "10",
    "5c008b223483c7d655764e46": "10"
  },
  "leftQty": {
    "5bbc34b9345fa9190e4c509a": 10,
    "5bbc36de345fa9190e4c509b": 10,
    "5bfcc27b3afd7ac3799aeed2": 10,
    "5c008b223483c7d655764e46": 10
  },
  "type": "preorder",
  "title": "T4自取团",
  "title_en": "",
  "minimalOrder": 10,
  "minimalTotal": 10,
  "cover": "5bfcc27b3afd7ac3799aeed2",
  "isDelivery": false,
  "isShipping": false,
  "supportPartyOrder": false,
  "isSupportDynamicPrice": false,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "county": "San Mateo County",
  "commission": 0.2000000000000000111,
  "isScheduled": true,
  "isPartyMode": false,
  "features": "undefined,5bbc3f42345fa9190e4c509d",
  "prepareTime": 30,
  "score": 5,
  "numberOfReviews": 0,
  "delivery_fee": 3.9900000000000002132,
  "delivery_range": 4,
  "serviceFee": 0,
  "isDeliveryBySystem": false,
  "isTaxIncluded": true,
  "msg": "",
  "coverString": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1543291508008-1",
  "createdAt": new Date(1540402460730),
  "updatedAt": new Date(1548633813004),
  "flag": "T4",
  "subtotal": 12,
  "orders": {
    "5acdc36c2dfd23b81ed42a20": {
      "number": 0,
      "preference": [

      ],
      "price": "30"
    },
    "5acdc43b2dfd23b81ed42a21": {
      "number": 0,
      "preference": [

      ],
      "price": "30"
    },
    "5acdc4fe2dfd23b81ed42a22": {
      "number": 0,
      "preference": [

      ],
      "price": "30"
    },
    "5acdc77a2dfd23b81ed42a23": {
      "number": 0,
      "preference": [

      ],
      "price": "30"
    },
    "5b73339b6817f8495de957e3": {
      "number": 0,
      "preference": [

      ],
      "price": "30"
    },
    "5c1c11cf5e5dae6a4e4b50e5": {
      "number": 0,
      "preference": [

      ],
      "price": "10"
    },
    "5bbc34b9345fa9190e4c509a": {
      "number": 0,
      "preference": [

      ],
      "price": "7.99"
    },
    "5bbc36de345fa9190e4c509b": {
      "number": 0,
      "preference": [

      ],
      "price": "6.99"
    },
    "5bfcc27b3afd7ac3799aeed2": {
      "number": 0,
      "preference": [

      ],
      "price": "7"
    },
    "5c008b223483c7d655764e46": {
      "number": 2,
      "preference": [
        {
          "extra": 0,
          "property": [

          ]
        },
        {
          "extra": 0,
          "property": [

          ]
        }
      ],
      "price": "6"
    },
    "5c31474be91c32ab67f0b76b": {
      "number": 0,
      "preference": [

      ],
      "price": "10.99"
    },
    "5888192829849a9109a065a2": {
      "number": 0,
      "preference": [

      ],
      "price": "9"
    },
    "5c180425db1275775cbf90c4": {
      "number": 0,
      "preference": [

      ],
      "price": "10"
    }
  },
  "hostEmail": "1104146557@qq.com",
  "nickname": "T4"
},
{
  "_id": "5bd0ae0aea4ff1c441215931",
  "status": "on",
  "dishes" : [
    {
  "_id": "5bbc34b9345fa9190e4c509a",
  "title": "原味绿豆糕",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1539060921239-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "8块",
  "description": "新鲜绿豆经过泡发蒸煮研磨多道工序制作成型，口感细腻，甜度适中。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539060921823),
  "updatedAt": new Date(1546828996465),
  "tag": "limited",
  "tags": [
    "select",
    "dessert"
  ],
  "peopleServe": "1",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bbc36de345fa9190e4c509b",
  "title": "蔓越莓雪花酥",
  "title-en": "",
  "price": 6.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1539061465688-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "9块",
  "description": "这款网红雪花酥，有坚果，蔓越莓，饼干，具有丰富的层次感明，甜而不腻。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539061470395),
  "updatedAt": new Date(1546829016603),
  "tag": "limited",
  "tags": [
    "dessert",
    "select"
  ],
  "peopleServe": "1",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bbc3f42345fa9190e4c509d",
  "title": "嘉兴大肉粽",
  "title-en": "",
  "price": 7,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540340226431-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "2个",
  "description": "徐记私房的大肉粽都是在接到订单才开始准备现包的，粽子选用优质的圆糯米肥瘦相间的五花肉，肥而不腻，每个粽子的份量都在227克以上。建议冷冻保存，蒸或煮加热，。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1539063618371),
  "updatedAt": new Date(1546816933882),
  "tag": "limited",
  "tags": [
    "frozen"
  ],
  "peopleServe": "2",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bcfe92eea4ff1c441215910",
  "title": "鲜肉月饼",
  "title-en": "",
  "price": 12,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540352301565-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "dimsum",
  "quantity": "四个",
  "description": "一盒四个，不用排队去上海，在湾区也能吃到正宗美味的鲜肉月饼。徐记私房的鲜肉月饼皮薄馅足，酥到掉渣，鲜肉加榨菜味道更加鲜美。温馨提示：食用前一定要加热！加热！加热！冰箱41F冷藏保存，最佳赏味期24小时内。加热方式：烤箱300F，3-5分钟即可。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tags": [
    "frozen"
  ],
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 1,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540352302107),
  "updatedAt": new Date(1546816949574),
  "tag": "limited",
  "peopleServe": "2",
  "cateringMinimalOrder": 10
},
{
  "_id": "5bd9137d124da58022eb0b77",
  "title": "上海咸肉菜饭",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540952956798-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "rice&noodle",
  "quantity": "16oz一碗",
  "description": "小时候妈妈的味道，用青菜咸肉香肠，白米精心烹制，咸香扑鼻，米饭软糯。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tag": "limited",
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540952957381),
  "updatedAt": new Date(1542080693381),
  "tags": [

  ]
},
{
  "_id": "5bd9149f124da58022eb0b78",
  "title": "豌豆饭",
  "title-en": "",
  "price": 7.9900000000000002132,
  "photos": [
    {
      "v": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1540953247563-1"
    },
    {
      "v": ""
    },
    {
      "v": ""
    }
  ],
  "type": "entree",
  "quantity": "16oz一碗",
  "description": "江南一带保留着立夏吃豌豆饭的习俗，徐记私房的豌豆饭，用料考究，白米、糯米，咸肉，香肠，笋和豌豆，经过精心烹制，豌豆饭，口感软糯，色泽诱人。",
  "description-en": "",
  "video": "",
  "preference": {

  },
  "isDynamicPriceOn": false,
  "priceRate": 0,
  "qtyRate": 0,
  "minimalPrice": 0,
  "tag": "limited",
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "sold": 0,
  "numberOfReviews": 0,
  "score": 5,
  "prepareTime": 30,
  "isVerified": true,
  "createdAt": new Date(1540953247926),
  "updatedAt": new Date(1541048514559),
  "tags": [

  ]
}
  ],
  "provideFromTime": new Date("2019-01-26T00:00:00-0800"),
  "provideTillTime": new Date("2019-01-30T12:00:00-0800"),
  "pickups": [
    {
      "pickupFromTime": "2019-02-02T20:00:00.000Z",
      "pickupTillTime": "2019-02-02T22:00:00.000Z",
      "location": "699 B Street Hayward",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "Hayward 94541",
      "comment": "",
      "deliveryCenter": "Hayward Station, B Street, Hayward, 加利福尼亚州美国",
      "deliveryRange": 20,
      "area": "",
      "county": "Alameda County",
      "index": 1,
      "nickname": "周六中午",
      "createdAt": "2018-11-13T01:40:43.628Z",
      "updatedAt": "2019-01-27T06:29:09.695Z",
      "lat": "37.6698401",
      "long": "-122.08707670000001",
      "year": "2019",
      "month": "1",
      "day": "19",
      "amPm": "pm",
      "hour12": "2",
      "minute": "0",
      "id": "5bea2b9be0c0737d44b19fdb"
    },
    {
      "pickupFromTime": "2019-02-02T21:00:00.000Z",
      "pickupTillTime": "2019-02-02T22:00:00.000Z",
      "location": "127 South 11th Street San Jose",
      "method": "delivery",
      "phone": "4158023853",
      "publicLocation": "San Jose 95112",
      "comment": "",
      "deliveryCenter": "San Jose University Aquatic Center, South 8th Street, 圣荷西加利福尼亚州美国",
      "deliveryRange": 20,
      "area": "San Jose",
      "county": "Santa Clara County",
      "index": 2,
      "nickname": "周六中午",
      "createdAt": "2018-11-13T01:54:59.268Z",
      "updatedAt": "2019-01-27T06:29:09.695Z",
      "lat": "37.3388149",
      "long": "-121.87860039999998",
      "year": "2019",
      "month": "1",
      "day": "19",
      "amPm": "pm",
      "hour12": "2",
      "minute": "0",
      "id": "5bea2ef3e0c0737d44b19fdc"
    }
  ],
  "totalQty": {
    "5bbc34b9345fa9190e4c509a": "10",
    "5bbc36de345fa9190e4c509b": "10",
    "5bfcc27b3afd7ac3799aeed2": "10",
    "5c008b223483c7d655764e46": "10"
  },
  "leftQty": {
    "5bbc34b9345fa9190e4c509a": 10,
    "5bbc36de345fa9190e4c509b": 10,
    "5bfcc27b3afd7ac3799aeed2": 10,
    "5c008b223483c7d655764e46": 7,
    "5c4e193c514203bd7e4d0a49": null,
    "5c180425db1275775cbf90c4": null,
    "5888192829849a9109a065a2": null,
    "5c1c11cf5e5dae6a4e4b50e5": null,
    "5b73339b6817f8495de957e3": null,
    "5afbbf004f1b00552a937695": null,
    "5acdc77a2dfd23b81ed42a23": null,
    "5acdc4fe2dfd23b81ed42a22": null,
    "5acdc43b2dfd23b81ed42a21": null,
    "5acdc36c2dfd23b81ed42a20": null,
    "59d5f04826469abc0ba78b4c": null,
    "5ba2d8c9e087b6b377ba540a": null
  },
  "type": "preorder",
  "title": "徐记私房湾区",
  "title_en": "",
  "minimalOrder": 10,
  "minimalTotal": 50,
  "cover": "5c0089a73483c7d655764e45",
  "isDelivery": true,
  "isDeliveryBySystem": true,
  "delivery_fee": 0,
  "isShipping": false,
  "supportPartyOrder": false,
  "isSupportDynamicPrice": false,
  "chef": "5bbc2a9c2a67d42575d9f78a",
  "county": "Alameda County+Santa Clara County",
  "commission": 0.2000000000000000111,
  "isScheduled": true,
  "isPartyMode": false,
  "features": "",
  "prepareTime": 30,
  "score": 5,
  "numberOfReviews": 0,
  "delivery_range": 4,
  "serviceFee": 0,
  "isTaxIncluded": true,
  "msg": "",
  "coverString": "https://sfmeal.s3.amazonaws.com/users/5bb2a4a5f1ff7e601e5640a3/dish-1543539110172-1",
  "createdAt": new Date("2018-10-24T10:38:00-0700"),
  "updatedAt": new Date(1548734980203),
  "flag": "Saturday全湾区",
  "hostEmail": "1104146557@qq.com",
  "nickname": "周六中午"
}
]

export default meals
import wepy from 'wepy'

let meals = [
  {id: '1', title: '荣盛小龙虾', type: "preorder", isDelivery: true, dishes: [
      {id: '1', title: '金汤小龙虾', price: '24', photo: 'https://sfmeal.s3.amazonaws.com/users/5872cc6008b7fa8b09f2ce18/dish-1523435383072-1'},
      {id: '2', title: '蒜泥小龙虾', price: '24', photo: 'https://sfmeal.s3.amazonaws.com/users/5872cc6008b7fa8b09f2ce18/dish-1523434554057-1'},
      {id: '3', title: '十三香小龙虾', price: '24', photo: 'https://sfmeal.s3.amazonaws.com/users/5872cc6008b7fa8b09f2ce18/dish-1523434347636-1'},
      {id: '4', title: '麻辣卤水小龙虾', price: '24', photo: 'https://sfmeal.s3.amazonaws.com/users/5872cc6008b7fa8b09f2ce18/dish-1523434749074-1'}
    ],
    provideFromTime: new Date("2018-07-26T06:30:00-0700"),
    provideTillTime: new Date("2018-08-26T06:30:00-0700"),
    pickups: [
        {
        pickupFromTime: "2018-08-27T13:30:00.000Z",
        pickupTillTime: "2018-08-28T13:30:00.000Z",
        location: "25 Washington St, Daly City, CA 94014, USA",
        method: "delivery",
        phone: "(415)623-4329",
        publicLocation: "25 Washington St, Daly City, CA 94014, USA",
        comment: "",
        deliveryCenter: "",
        area: "",
        county: "San Mateo County",
        index: 1
        },
        {
        pickupFromTime: "2018-08-13T18:12:54.973Z",
        pickupTillTime: "2018-08-13T18:12:54.973Z",
        deliveryCenter: "25 Washington St, Daly City, CA 94014, USA",
        method: "delivery",
        area: "Daly City",
        phone: "(415)623-4329",
        county: "San Mateo County",
        index: 2,
        isDateCustomized: true
        }
    ]
  },
  {id: '2', title: '阿震弄堂美食',type: "order", isDelivery: false, dishes: [
      {id: '5', title: '辣肉葱油拌面', price: '10', photo: 'https://sfmeal.s3.amazonaws.com/users/59dabcd47a26ee913fdb4e06/dish-1524004894456-1'},
      {id: '6', title: '上海糟鸡爪', price: '12', photo: 'https://sfmeal.s3.amazonaws.com/users/59dabcd47a26ee913fdb4e06/dish-1526592407540-1'}
    ],
    provideFromTime: new Date("2018-08-05T16:00:00-0700"),
    provideTillTime: new Date("2018-08-05T23:00:00-0700"),
    pickups: [
    {
      pickupFromTime: new Date("2018-08-05T16:00:00-0700"),
      pickupTillTime: new Date("2018-08-05T23:00:00-0700"),
      location: "25 Washington St, Daly City, CA 94014, USA",
      phone: "(415)802-3853",
      method: "pickup",
      county: "San Mateo County",
      area: "",
      index: 1
    },
    {
      pickupFromTime: new Date("2018-08-05T16:00:00-0700"),
      pickupTillTime: new Date("2018-08-05T23:00:00-0700"),
      deliveryCenter: "25 Washington St, Daly City, CA 94014, USA",
      phone: "(415)802-3853",
      method: "delivery",
      county: "San Mateo County",
      area: "",
      index: 2
    }]
  }
]

export default meals
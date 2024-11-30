interface order {
  orderDate: string;
  productName: string;
  author?: string;
  returnWindow: string;
  total: number;
  beforeTax: number;
  shipTo: string;
  orderNum: string;
  deliveryDate: string;
  delivered: boolean;
  directDelivery?: boolean;
  getProductSupport?: boolean;
  writeAProductReview?: string;
  buyAgain?: boolean;
  viewItem?: boolean;
}
const orderHistory: order = [
  {
    orderDate: 'August 4, 2020',
    productName: 'JavaScript for impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    returnWindow: 'September 7 2020',
    total: 34,
    beforeTax: 31.55,
    shipTo: 'JS Masher',
    orderNum: '114-3941689-8772232',
    deliveryDate: 'Aug 8, 2020',
    delivered: true,
    directDelivery: false,
    getProductSupport: null,
    writeAProductReview: null,
    buyAgain: null,
    viewItem: null,
  },

  {
    orderDate: 'July 19, 2020',
    productName: 'The Timeless Way of Building',
    author: 'Alexander, Christopher',
    returnWindow: 'Aug 19, 2020',
    total: 44.53,
    beforeTax: 41.33,
    shipTo: 'JS Masher',
    orderNum: '113-9984268-1280257',
    deliveryDate: 'July 20 2020',
    delivered: true,
    directDelivery: true,
    getProductSupport: null,
    writeAProductReview: null,
    buyAgain: null,
    viewItem: null,
  },
  {
    orderDate: 'July 4, 2020',
    productName:
      'Gamecube Controller Adapter. Super SMash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    author: null,
    total: 17.22,
    beforeTax: 15.98,
    returnWindow: 'Aug 5, 2020',
    shipTo: 'JS Masher',
    orderNum: '114-2875557-9059409',
    deliveryDate: 'July 7, 2020',
    delivered: true,
    directDelivery: true,
    getProductSupport: null,
    writeAProductReview: null,
    buyAgain: null,
    viewItem: null,
  },
  {
    orderDate: 'July 3, 2020',
    productName:
      'Gamecube Controller- Super Smash Bros. Edition (Nintendo Switch)',
    author: null,
    returnWindow: 'Aug 4 2020',
    total: 138.93,
    beforeTax: 94.95,
    shipTo: 'JS Masher',
    orderNum: '113-2883177-2648248',
    deliveryDate: 'July 5, 2020',
    delivered: true,
    directDelivery: null,
    getProductSupport: null,
    writeAProductReview: null,
    buyAgain: null,
    viewItem: null,
  },
  {
    orderDate: 'July 3, 2020',
    productName: 'The Art of Sql',
    author: null,
    returnWindow: 'Aug 4 2020',
    total: 138.93,
    beforeTax: 33.99,
    shipTo: 'JS Masher',
    orderNum: '113-2883177-2648248',
    deliveryDate: 'July 5, 2020',
    delivered: true,
    directDelivery: null,
    getProductSupport: null,
    writeAProductReview: null,
    buyAgain: null,
    viewItem: null,
  },
];
console.log(orderHistory);

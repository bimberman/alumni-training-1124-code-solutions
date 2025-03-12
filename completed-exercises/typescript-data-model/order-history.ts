interface Item {
  id: number;
  price: number;
  title: string;
  // Many of the optional properties below should be mandatory but for brevity I've left them optional
  description?: string;
  manufacturer?: string;
  imageUrl?: string;
  maxReturnDays?: number;
  available?: boolean;
  quantity?: number;
  maxCheckoutLength?: number;
  genre?: string;
  language?: string;
}

interface Book extends Item {
  isbn: string;
  author: string;
  publisher?: string;
}

interface Order {
  id: number;
  orderDate: string;
  price: number;
  itemId: number[];
  address: string;
  tax: number;
  deliveryDate?: string;
  reviews?: object[];
  returned?: boolean;
  returnDate?: string;
}

type StoreItemTypes = Item | Book;

const store: Array<StoreItemTypes> = [
  {
    id: 1,
    isbn: '9781091210097',
    price: 19.99,
    title: 'JavaScript for Impatient Programmers',
    author: 'Axel Rauschmayer',
  },
  {
    id: 2,
    isbn: '9780195024029',
    price: 9.99,
    title: 'The Timeless Way of Building',
    author: 'Christopher Alexander',
  },
  {
    id: 3,
    isbn: '9780195024029',
    price: 12.99,
    title: 'The Timeless Way of Building',
    author: 'Christopher Alexander',
  },
  {
    id: 4,
    price: 99.99,
    title: 'GameCube',
    manufacturer: 'Nintendo',
  },
  {
    id: 5,
    price: 15.99,
    title: 'GameCube Controller',
    manufacturer: 'Nintendo',
  },
  {
    id: 6,
    price: 39.99,
    title: 'Basketball',
    manufacturer: 'Spalding',
  },
];

const orderHistory: Order = [
  {
    id: 1,
    orderDate: '20250312T111205Z',
    price: 48.97,
    itemId: [1, 3, 5],
    tax: 9.5,
    address: '1234 Elm St',
    deliveryDate: '20250315T111205Z',
  },
];

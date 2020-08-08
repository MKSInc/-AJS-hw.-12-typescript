import Cart from '../service/Cart';
import Book from '../domain/Book';
import Smartphone from '../domain/Smartphone';

let cart = new Cart();
const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const smartphone = new Smartphone(1012, 'Nokia 3310', 'HMD Global', 7000, 'Для тех, кто помнит', 1);

beforeEach(() => {
  cart = new Cart();
});

test('new card should be empty', () => {
  expect(cart.items.length).toBe(0);
});

describe('The cart.add() method', () => {
  test('should add an item to the cart.items property', () => {
    cart.add(book);
    expect(cart.items[0]).toEqual(book);
  })
  
  test('should not add an item that can only be in one instance, if such an item is already in the cart', () => {
    cart.add(book);
    cart.add(book);
    expect(cart.items.length).toBe(1);
  })
  
  test('should add an item, which can be in several instances, if such an item is already in the cart', () => {
    cart.add(smartphone);
    cart.add(smartphone);
    cart.add(smartphone);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].count).toBe(3);
  })
})

describe('The cart.getFullPrice() method', () => {
  test('should return the total cost (excluding discounts) ', () => {
    cart.add(book);
    cart.add(smartphone);
    cart.add(smartphone);
    expect(cart.getFullPrice()).toBe(16000);
  })
})

describe('The cart.getFullDiscountedPrice() method', () => {
  test('should return the total cost (including the discount)', () => {
    cart.add(book);
    cart.add(smartphone);
    cart.add(smartphone);
    expect(cart.getFullDiscountedPrice(10)).toBe(14400);
  })
})

describe('The cart.deleteItem() method', () => {
  test('should delete an item from the cart', () => {
    cart.add(book);
    cart.deleteItem(1001);
    expect(cart.items.length).toBe(0);
  })

  test('should correctly delete items, of which there may be several', () => {
    cart.add(smartphone);
    cart.add(smartphone);
    cart.deleteItem(1012);
    expect(cart.items[0].count).toBe(1);
    cart.deleteItem(1012);
    expect(cart.items.length).toBe(0);
  })

  test('should not delete if there is no item in the cart with the passed ID.', () => {
    cart.add(book);
    cart.deleteItem(10010);
    expect(cart.items.length).toBe(1);
  })
})

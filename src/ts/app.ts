import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, 'The Avengers', 'USA', 800, 2012, 'Avengers Assemble!', ['fantasy', 'action', 'adventure'], 137));

console.log(cart.items);
console.log(cart.getFullPrice());
console.log(cart.getFullDiscountedPrice(10));

cart.deleteItem(1008);
console.log(cart.items);

cart.add(new Smartphone(1012, 'Nokia 3310', 'HMD Global', 7000, 'Для тех, кто помнит', 1));
cart.add(new Smartphone(1012, 'Nokia 3310', 'HMD Global', 7000, 'Для тех, кто помнит', 1));
console.log(cart.items);
console.log('Smartphone count: ', cart.items[2].count);

console.log(cart.getFullPrice());
console.log(cart.getFullDiscountedPrice(10));

cart.deleteItem(1012);
console.log(cart.items);
console.log('Smartphone count: ', cart.items[2].count);

cart.deleteItem(1012);
console.log(cart.items);
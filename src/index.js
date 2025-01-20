import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart !");

const item1 = await createItem("hotwheels ferrari", 20.99, 7);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item2);

console.log("Shopee Cart TOTAL IS:");
await cartService.calculateTotal(myCart);

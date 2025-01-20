import createItem from "./services/item.js";

const cart = [];

console.log("Welcome to your Shopee Cart !");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

console.log(item2.subtotal());

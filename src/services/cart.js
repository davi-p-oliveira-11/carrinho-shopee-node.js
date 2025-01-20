// which actions my cart can do ?

/* use cases */

/* add item */
async function addItem(userCart, item) {
  userCart.push(item);
}

// calculate the total
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(result);
}

// delete item
async function deleteItem(userCart, name) {}

// remove an item - 1 item
async function removeItem(userCart, index) {}

export { addItem, calculateTotal, deleteItem, removeItem };

// which actions my cart can do ?

/* use cases */

/* add item */
async function addItem(userCart, item) {
  userCart.push(item);
}

// calculate the total
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\n Total: ${result.toFixed(2)}`);
}

// delete item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// remove an item - 1 item
async function removeItem(userCart, index) {
  // change the visual index of the user, to backend index

  const deleteIndex = index - 1;

  // if is bigger than the size of tne cart

  if (index >= 0 && index < userCart.length) {
    userCart.splice(index, 1);
  }
}

async function displaycart(userCart) {
  console.log(" \n Shopee cart list");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      } | Subtotal = ${item.subtotal().toFixed(2)}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displaycart };

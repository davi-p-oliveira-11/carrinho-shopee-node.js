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

/*
// remove an item - 1 item
async function removeItem(userCart, index) {
  // change the visual index of the user, to backend index

  const deleteIndex = index - 1;

  // if is bigger than the size of tne cart

  if (index >= 0 && index < userCart.length) {
    userCart.splice(index, 1);
  }
}
*/

async function removeItem(userCart, item) {
  // 1. find item index
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  // 2. in case the item is not found
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  // 3. if item is bigger than 1, subtract an
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  // 4. caso item = 1 delete a item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
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

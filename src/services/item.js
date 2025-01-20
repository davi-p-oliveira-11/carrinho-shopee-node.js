// use cases

/* create item with subtotal  */
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
}

export default createItem;

function avg(data) {
  let total = data.products.reduce((accumulator, i) => {
    return accumulator + i.price;
  }, 0); // 要加 initial value！要加 initial value！要加 initial value！很重要所以要說三遍

  return total / data.products.length;
}

// main

const data = {
  size: 3,
  products: [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 700 },
    { name: "Product 3", price: 250 },
  ],
};

console.log(avg(data));

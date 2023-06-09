const cart = [];
const count = [];
const plist = [];
var price = 0;

const addToCart = (item, p) => {
  const k = cart.findIndex((inside) => item === inside);
  price = price + p;
  if (k < 0) {
    cart.push(item);
    count.push(1);
    plist.push(p);
    console.log(item, " has been added with count ", 1);
  } else {
    const index = cart.findIndex((inside) => inside === item);
    count[index]++;
    plist[index] += p;
    console.log(item, " has been added with count ", count[index]);
  }
  console.log(cart);
  console.log(count);
  console.log(p, "has been added, so total price is ", price);
};

export { cart, addToCart, count, price, plist };

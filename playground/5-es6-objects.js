// Object property shorthand

const name = "Kai";
const userAge = 22;

const user = {
  name,
  age: userAge,
  location: "Deventer",
};

console.log(user);

// Object Desctructuring

const product = {
  label: "Notebook",
  price: 5,
  stock: 200,
  salePrice: undefined,
};

//const label = product.label;
//const stock = product.stock;

const {
  label: productLabel,
  stock,
  rating = "5 stars",
  price = "10 dollars",
} = product;
console.log(productLabel, stock);
console.log(rating, price);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);

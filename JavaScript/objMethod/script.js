const product = {
  id: 101,
  name: "Gaming Laptop",
  price: 1500,
  category: "Electronics",
  specs: {
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "RTX 3060"
  },
  tags: ["gaming", "laptop", "electronics"],
  getDescription() {
    return `${this.name} — $${this.price} (${this.category})`;
  }
};


//1 Access name, price and category using dot notation
//2 Access ram and gpu from specs using dot notation
//3 Destructure name, price, category from product
//4 Destructure ram and storage from specs using nested destructuring
//5 Call the getDescription() method
//6 Use Object.keys() to get all keys of product
//7 Add a new property inStock: true using spread operator
//8 Add "RTX 4090" to tags array without mutating original — use spread
//9 Use Object.entries() with forEach to print all key-value pairs


console.log(`Name: ${product.name} Price: ${product.price} Category: ${product.category}`);
console.log(`Ram: ${product.specs.ram} gpu:${product.specs.gpu}`);

const {name,price,category} = product
const {specs={ram,storage}} = product

console.log(product.getDescription());

console.log(Object.keys(product));

let prod2={...product,inStock:true}

const updatedProduct = {
  ...product,
  tags: [...product.tags, "RTX 4090"]
};

console.log(prod2)
console.log(updatedProduct)

Object.entries(product).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});








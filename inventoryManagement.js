// Task 2: Create an array called products
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Task 3: Log the first product in the array
function logFirstProduct() {
  console.log(products[0]);
}

// Task 4: Add a new product to the end of the array
function addProduct(productName) {
  products.push(productName);
}

// Task 5: Update a product name at a given index/position
function updateProductName(position, newName) {
  products[position] = newName;
}

// Task 6: Remove the last product from the array
function removeLastProduct() {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
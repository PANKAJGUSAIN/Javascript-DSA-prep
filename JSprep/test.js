const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
    { name: 'Product 4', price: 40 },
    { name: 'Product 5', price: 50 }
];

for(let product of products){
    if (product.name == "Product 5"){
        product.price = 400;
    }
}

console.log(products);
var faker = require('faker');
var fs = require('fs');

var products = [];

for (let i = 1; i < 100; i++) {
    let product = {};
    product.id = faker.datatype.uuid();
    product.author = faker.name.firstName(); // Caitlyn Kerluke
    product.authorEmail = faker.internet.email(); // Rusty@arne.info
    product.description = faker.commerce.productDescription(); // Rusty@arne.info
    product.productAdjective = faker.commerce.productAdjective(); // Rusty@arne.info
    product.productName = faker.commerce.productName(); // Rusty@arne.info
    product.price = faker.commerce.price(); // Rusty@arne.info
    product.productMaterial = faker.commerce.productMaterial(); // Rusty@arne.info
    product.subCategory = faker.commerce.product(); // Rusty@arne.info
    product.color = faker.commerce.color(); // Rusty@arne.info
    product.category = faker.commerce.department(); // Rusty@arne.info
    product.longDescription = faker.lorem.paragraphs(5)
    product.images = {
        imageUrl: faker.image.imageUrl(480, 590),
        author: faker.image.avatar()
    }
    products.push(product);
}

products = JSON.stringify(products);


fs.writeFileSync(`products${new Date().toDateString().split(" ").join("-")}.json`, products, 'utf8');
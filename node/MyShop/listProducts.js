var faker = require("faker");

for(var i = 0; i <= 10; i++){
  var product = faker.commerce.productName();
  var amount = faker.finance.amount();
  console.log(product, amount);
}

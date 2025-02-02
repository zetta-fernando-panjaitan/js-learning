let book1 = "JavaScript: The Good Parts";
let book2 = "JavaScript: The Good Parts";

console.log(book1 === book2);

let priceBook1 = 300000;
let priceBook2 = 600000;

let moreExpensive = priceBook1 > priceBook2 ? "Book 1 is more expensive" : "Book 2 is more expensive";
console.log(moreExpensive);

let averagePrice = (priceBook1 + priceBook2) / 2;
console.log(averagePrice);

let priceCategory = averagePrice > 500000 ? "Expensive" : "Cheap";
console.log(priceCategory);
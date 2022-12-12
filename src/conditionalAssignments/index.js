let product = {
  name: 'My Product',
  description: 'This is my product',
  value: 0
};

// NullishCoalescingAssignment ??=
// only (null ou undefined)
product.category ??= 'product category';
product.category ??= 'new product category';

console.log(product)


// LogicalOrAssignment ||=
// only (0, -0, null, undefined, 0n, empty string, Number.NaN)
product.value ||= 100;
product.value ||= 200;

console.log(product)


// LogicalAndAssignment ||=
// only (0, -0, null, undefined, 0n, empty string, Number.NaN)
product.name &&= "product name";
product.name &&= "new product name";

console.log(product)

// Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
// and return a list of objects where each object is unique category-wise and has total price spent as its value.
// Transaction - an object like { itemName, category, price, timestamp }.
// Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
// Once you've implemented the logic, test your code by running
// - `npm run test-expenditure-analysis`

function calculateTotalSpentByCategory(transactions) {
  const result = [];
  const map = {};
  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];
    map[category] = map[category] + price || price;
  }
  for (let key in map) {
    result.push({ category: key, totalSpent: map[key] });
  }
  return result;
}


module.exports = calculateTotalSpentByCategory;

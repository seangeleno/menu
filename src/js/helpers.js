// filters the array by checking if the type of each item is equal to the type we passed in
export function filterByType(items, type) {
  return items.filter(item => item.type === type);
}
// gives us a floating point decimal then creates a fixed string with two decimal places.
export function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

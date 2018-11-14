/*
 * Items is an array of order item objects e.g.
 * [
 *   { quantity: 50, width: 1, height: 2, product: { area_price: 0.8 } }
 * ]
 * You should return a number rounded to 2 decimal places
 */
function quantityDiscount(items) {
  const roundToTwo = x => Math.round(x * 100) / 100;
  const totalQuantity = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const normalOrderTotal = items.reduce((acc, curr) => {
    const area = curr.width * curr.height;
    const quantityAdjustment = curr.quantity ** -0.1;
    const itemPrice = area * curr.product.area_price * curr.quantity * quantityAdjustment;
    return acc + itemPrice;
  }, 0);

  const reducedOrderTotal = items.reduce((acc, curr) => {
    const area = curr.width * curr.height;
    const quantityAdjustment = totalQuantity ** -0.1;
    const itemPrice = area * curr.product.area_price * curr.quantity * quantityAdjustment;
    return acc + itemPrice;
  }, 0);

  return roundToTwo(roundToTwo(normalOrderTotal) - roundToTwo(reducedOrderTotal));
}
console.log(
  quantityDiscount([
    { quantity: 50, width: 2, height: 1, product: { area_price: 0.8 } },
    { quantity: 50, width: 1, height: 1, product: { area_price: 0.8 } }
  ])
);
var assert = require('assert');
describe('quantity Discount', function() {
  describe('quantityDiscount', function() {
    it('should return 5.44', function() {
      assert.equal(
        quantityDiscount([
          { quantity: 50, width: 2, height: 1, product: { area_price: 0.8 } },
          { quantity: 50, width: 1, height: 1, product: { area_price: 0.8 } }
        ]),
        5.44
      );
    });
  });
});

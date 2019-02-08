function Order(obj) {
  this.items = {}
}

Order.prototype.add = function (product, quantity) {
  this.items[product] = quantity
};

Order.prototype.remove = function (product, newQuantity) {
  var val = this.items[product]
  this.items[product] -= newQuantity
};

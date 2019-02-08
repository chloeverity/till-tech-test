function Order(obj) {
  this.items = {}
}

Order.prototype.add = function (product, quantity) {
  this.items[product] = quantity
};

Order.prototype.remove = function (product, newQuantity) {
  this.items[product] -= newQuantity
};

Order.prototype.clear = function () {
  this.items = {}
};

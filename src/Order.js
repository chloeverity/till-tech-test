function Order(obj) {
  this.items = []
}

Order.prototype.add = function (product, quantity) {
  this.items.push({
    key: product,
    value: quantity
  })
};

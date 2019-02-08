function Kitchen(order) {
  this.order = order
  this.allOrders = []
}

Kitchen.prototype.import = function () {
  this.allOrders.push(order)
};

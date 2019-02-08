
function Person(name) {
  this.name = name
  this.items = {}
  this.completePersonalOrder = []
}

Person.prototype.addToOrder = function (product, quantity) {
  this.items[product] = quantity
};

Person.prototype.removeFromOrder = function (product, newQuantity) {
  this.items[product] -= newQuantity
};

Person.prototype.clearFromOrder = function () {
  this.items = {}
};

Person.prototype.completeOrder = function () {
  this.completePersonalOrder.push(this.items);
  this.items = {}
};

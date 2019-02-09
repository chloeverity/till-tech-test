
function Person(name, restaurant) {
  this.name = name
  this.restaurant = restaurant
  this.items = {}
  this.completePersonalOrder = []
}

Person.prototype.addToOrder = function (product, quantity) {
  if (this.checkRestaurant() === false) {
    throw "You can't order at a non-existend restaurant!"
  } else {
    this.items[product] = quantity
  }
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

// function load() {
//   var restaurantData = JSON.parse(data)
//   alert(restaurantData)
// }
//
Person.prototype.checkRestaurant = function () {
  var restaurantData = JSON.stringify(data)
  if (restaurantData.includes(this.restaurant)) {
    return true
  } else {
    return false
  }
};

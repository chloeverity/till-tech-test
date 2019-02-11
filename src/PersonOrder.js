
function Person(name, restaurant) {
  this.name = name
  this.restaurant = restaurant
  this.items = {}
  this.completePersonalOrder = []
  this.restaurantList = []
  this.restaurantPrices = []
}

Person.prototype.addToOrder = function (product, quantity) {
  if (this.checkRestaurant() === false) {
    throw "You can't order at a non-existent restaurant!"
  } else if (this.checkItem(product) === false) {
    throw "That item isn't on the menu, please order something else."
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
  for (i = 0; i < data.length; i++) {
    this.restaurantList.push(data[i].shopName)
  }
  if (this.restaurantList.includes(this.restaurant)) {
    return true
  } else {
    return false
  }
};

Person.prototype.checkItem = function (product) {
  var restaurantIndex = (this.restaurantList.indexOf(this.restaurant))
  var itemMenu = Object.keys(data[restaurantIndex].prices[0])
  for (i = 0; i < itemMenu.length; i++) {
    this.restaurantPrices.push(itemMenu[i])
  }
  if (this.restaurantPrices.includes(product)) {
    return true
  } else {
    return false
  }
};

function Calculator(table) {
  this.table = table;
  this.orderPriceList = []
  this.restaurant = this.table.people[0].restaurant
  this.restaurantIndex = this.table.people[0].restaurantList.indexOf(this.restaurant)
  this.totalBeforeTax = 0
}

Calculator.prototype.calculate = function () {
  for (var i = 0; i < this.table.tableOrder.length; i++){
    for (var j = 0; j < this.table.tableOrder[i].length; j++) {
      var obj = this.table.tableOrder[i][j];
      var key = Object.keys(obj)[0];
      var quantity = obj[key];
      var itemIndex = data[this.restaurantIndex].prices.indexOf(key)
      var priceKey = Object.values(itemIndex)[0]
      var price = data[this.restaurantIndex].prices[0][key]
      this.orderPriceList.push(quantity * price)
    }
  }
  for(var i = 0; i < this.orderPriceList.length; i++) {
    this.totalBeforeTax += this.orderPriceList[i];
  }
  return this.totalBeforeTax
};

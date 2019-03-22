function Calculator(table) {
  this.table = table;
  this.orderPriceList = []
  this.restaurant = this.table.people[0].restaurant
  this.restaurantIndex = this.table.people[0].restaurantList.indexOf(this.restaurant)
  this.totalBeforeTax = 0
}

Number.prototype.round = function(p) {
  p = p || 10;
  return parseFloat( this.toFixed(p) );
};

Calculator.prototype.calculate = function () {
  for (var j = 0; j < Object.keys(this.table.tableOrder).length; j++) {
    for (var i = 0; i < Object.keys(this.table.tableOrder[j][0]).length; i++){
      var obj = this.table.tableOrder[j][0]
      var key = Object.keys(obj)[i]
      var quantity = obj[key]
      var itemIndex = data[this.restaurantIndex].prices.indexOf(key)
      var priceKey = Object.values(itemIndex)[0]
      var price = data[this.restaurantIndex].prices[0][key]
      this.orderPriceList.push(quantity * price)
    }
  }
  for(var i = 0; i < this.orderPriceList.length; i++) {
    this.totalBeforeTax += this.orderPriceList[i];
  }
  return this.totalBeforeTax.round(3)
};

Calculator.prototype.orderTotalAfterTax = function () {
  var tax = data[this.restaurantIndex].tax
  var unformattedNo = this.totalBeforeTax * (1 + tax/100)
  return Math.round(unformattedNo * 100) / 100
};

function Printer(calculator) {
  this.calculator = calculator
}

function roundN(num,n){
  return parseFloat(Math.round(num * Math.pow(10, n)) /Math.pow(10,n)).toFixed(n);
}


Printer.prototype.print = function(cashGiven) {
  var restaurantName = this.calculator.restaurant
  var restaurantAddress = data[this.calculator.restaurantIndex].address
  var restaurantTelephone = data[this.calculator.restaurantIndex].phone
  var tableNo = this.calculator.table.table
  var people = this.calculator.table.people.length
  var peopleArray = []
  var tableSize = this.calculator.table.people.length
  for (i = 0; i < tableSize; i++) {
    peopleArray.push(this.calculator.table.people[0].name)
  }
  var tableOrder = []
  var tableOrderLength = this.calculator.table.tableOrder.length
  for (i = 0; i < Object.keys(this.calculator.table.tableOrder[0][0]).length; i++) {
    var obj = this.calculator.table.tableOrder[0][0]
    var key = Object.keys(obj)[i]
    var quantity = obj[key]
    var itemIndex = data[this.calculator.restaurantIndex].prices.indexOf(key)
    var priceKey = Object.values(itemIndex)[0]
    var price = data[this.calculator.restaurantIndex].prices[0][key]
    tableOrder.push(`\n${key}     ${quantity} x ${price}`)
  }
  var restaurantTax = data[this.calculator.restaurantIndex].tax
  var totalAfterTax = this.calculator.orderTotalAfterTax()
  return `${restaurantName}\n${restaurantAddress}\nPhone: ${restaurantTelephone}\nTable: ${tableNo} / [${people}]\n${peopleArray}\n${tableOrder}\n\nTax: $${roundN((totalAfterTax - this.calculator.totalBeforeTax), 2)}\nTotal: $${totalAfterTax}\nCash: $${cashGiven}\nChange: $${roundN((cashGiven - totalAfterTax), 2)}\nThank You!`
}

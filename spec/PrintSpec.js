describe ("Print", () => {
  var chloe

  beforeEach(() => {
    chloe = new Person("Chloe", "The Coffee Connection");
    chloe.addToOrder("Tea", 2)
    chloe.addToOrder("Flat White", 3)
    chloe.completeOrder()
    table = new Table(3, chloe)
    table.combinePersonalOrders()
    calculator = new Calculator(table)
    calculator.calculate()
    calculator.orderTotalAfterTax()
  })

  it("prints a receipt for one person", () => {
    printer = new Printer(calculator)
    printer.print(25.00)
    expect(printer.print()).toEqual("The Coffee Connection\n123 Lakeside Way\nPhone: 16503600708\nTable: 3 / [1]\nChloe\n\nTea     2 x 3.65,\nFlat White      3 x 4.75\n\nTax: $1.86\nTotal: $23.41\nCash: $25.00\nChange: $1.89\nThank You!")
  })

})

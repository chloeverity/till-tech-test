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
    calculator.calculate
  })

  it("prints a receipt for one person", () => {
    printer = new Printer(calculator)
    printer.print(25)
    expect(printer.print).toEqual("The Coffee Connection\n123 Lakeside Way\nPhone: +1 (650) 360-0708\nTable: 1/ [1]\nChloe\nTea     1 x 3.65\nFlat White      3 x 4.75\nTax: $1.86\nTotal: $23.41\nCash: $25.00\nChange: $1.59\nThank You!")
  })

})

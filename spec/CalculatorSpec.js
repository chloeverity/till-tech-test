describe("Calculator", () => {
  var chloe;
  beforeEach(() => {
    chloe = new Person("Chloe", "The Coffee Connection")
  })
  it("Uses json to find the price of specific item", () => {
    chloe.addToOrder("Tea", 1)
    chloe.completeOrder()
    table = new Table(3, chloe)
    table.combinePersonalOrders()
    calculator = new Calculator(table)
    expect(calculator.calculate()).toEqual(3.65)
  })
  it("Can calculate the combined price of multiple items", () => {
    chloe.addToOrder("Tea", 2)
    chloe.addToOrder("Flat White", 3)
    chloe.completeOrder()
    table = new Table(3, chloe)
    table.combinePersonalOrders()
    calculator = new Calculator(table)
    expect(calculator.calculate()).toEqual(21.55)
  })
  it("Can find the restaurant's tax percentage and adjust the order total", () => {
    chloe.addToOrder("Tea", 2)
    chloe.addToOrder("Flat White", 3)
    chloe.completeOrder()
    table = new Table(3, chloe)
    calculator = new Calculator(table)
    expect(calculator.orderTotalAfterTax()).toEqual(23.41)
  })
})

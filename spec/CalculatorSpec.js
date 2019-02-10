describe("Calculator", () => {
  var chloe;
  beforeEach(() => {
    chloe = new Person("Chloe", "The Coffee Connection")
  })
  it("Uses json to find the price of specific item", () => {
    chloe.addToOrder("Tea", 1)
    table = new Table(3, chloe)
    expect(table.orderTotal).toEqual(3.65)
  })
})

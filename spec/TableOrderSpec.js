describe("Table Order", () => {
  var chloe;
  var jonny;

  beforeEach(() => {
    chloe = new Person("Chloe", "The Coffee Connection");
    jonny = new Person("Jonny", "The Coffee Connection");
  });

  it("takes all the people on a given table's order and combines them into a table order", () => {
    chloe.addToOrder("Tea", 1)
    chloe.completeOrder()
    jonny.addToOrder("Tiramisu", 3)
    jonny.addToOrder("Flat White", 5)
    jonny.completeOrder()
    table = new Table(1, jonny, chloe)
    table.combinePersonalOrders()
    expect(table.tableOrder.length).toEqual(2)
  })
})

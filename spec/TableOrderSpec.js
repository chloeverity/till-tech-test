describe("Table Order", () => {
  var chloe;
  var jonny;

  beforeEach(() => {
    chloe = new Person("Chloe");
    jonny = new Person("Jonny");
  });

  it("takes all the people on a given table's order and combines them into a table order", () => {
    chloe.addToOrder("Tea", 1)
    chloe.completeOrder()
    jonny.addToOrder("Cake", 3)
    jonny.addToOrder("Coffee", 5)
    jonny.completeOrder()
    table = new Table(1, jonny, chloe)
    table.combinePersonalOrders()
    expect(table.tableOrder.length).toEqual(2)
  })
})

describe("Order", () => {
  var order;

  beforeEach(() => {
    order = new Order;
  })
  it("Should initialize with an empty array", () => {
    expect(order.items.length).toEqual(0)
  })
  it("can add an order with a specified quantity", () => {
    order.add("Tea", 2)
    expect(order.items.length).toEqual(1)
  })
})

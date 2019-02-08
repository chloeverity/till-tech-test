describe("Order", () => {
  var order;

  beforeEach(() => {
    order = new Order;
  })
  it("Should initialize with an empty array", () => {
    expect(order.items).toEqual({})
  })
  it("can add an order with a specified quantity", () => {
    order.add("Tea", 2)
    expect(order.items["Tea"]).toEqual(2)
  })
  it("can remove an item from an order if mind is changed", () => {
    order.add("Tea", 2)
    order.add("Coffee", 4)
    order.remove("Coffee", 3)
    expect(order.items["Coffee"]).toEqual(1)
  })
})

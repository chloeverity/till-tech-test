describe("Order", () => {
  var order;

  beforeEach(() => {
    order = new Order;
  })
  it("Should initialize with an empty array", () => {
    expect(order.content.length).toEqual(0)
  })
})

describe("Person", () => {
  var person;

  beforeEach(() => {
    person = new Person("Hannah");
  })
  it("Should initialize with an empty array", () => {
    expect(person.items).toEqual({})
  })
  it("can add an item with a specified quantity", () => {
    person.addToOrder("Tea", 2)
    expect(person.items["Tea"]).toEqual(2)
  })
  it("can remove an item from an order if mind is changed", () => {
    person.addToOrder("Tea", 2)
    person.addToOrder("Coffee", 4)
    person.removeFromOrder("Coffee", 3)
    expect(person.items["Coffee"]).toEqual(1)
  })
  it("can clear the order to start again", () => {
    person.addToOrder("Tea", 2)
    person.addToOrder("Coffee", 4)
    person.addToOrder("Water", 1)
    person.clearFromOrder()
    expect(person.items).toEqual({})
  })
  it("can complete an person to send it off to the kitchen", () => {
    person.addToOrder("Tea", 2)
    person.addToOrder("Coffee", 4)
    person.completeOrder()
    expect(person.completePersonalOrder.length).toEqual(1)
    expect(person.items).toEqual({})
  })
})

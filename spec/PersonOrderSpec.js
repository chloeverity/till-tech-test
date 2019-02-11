describe("Person", () => {
  var person;

  beforeEach(() => {
    person = new Person("Hannah", "The Coffee Connection");
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
    person.addToOrder("Flat White", 4)
    person.removeFromOrder("Flat White", 3)
    expect(person.items["Flat White"]).toEqual(1)
  })
  it("can clear the order to start again", () => {
    person.addToOrder("Tea", 2)
    person.addToOrder("Flat White", 4)
    person.clearFromOrder()
    expect(person.items).toEqual({})
  })
  it("can complete an person to send it off to the kitchen", () => {
    person.addToOrder("Tea", 2)
    person.addToOrder("Flat White", 4)
    person.completeOrder()
    expect(person.completePersonalOrder.length).toEqual(1)
    expect(person.items).toEqual({})
  })
  it("doesn't let you order if the restaurant isn't listed in json file", () => {
    testPerson = new Person("Test Person", "Not a restaurant")
    expect(function() {testPerson.addToOrder("Tea", 2);}).toThrow("You can't order at a non-existent restaurant!")
  })
  it("doesn't let you order if the item isn't on the restauran'ts menu", () => {
    expect(function() {person.addToOrder("Jellybeans", 1);}).toThrow("That item isn't on the menu, please order something else.")
  })
})

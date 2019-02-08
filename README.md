# Till Tech Test

We want to sell tills to a local hipster coffee shop who are finally embracing the 21st century. We need a new till to replace their vintage machines - unfortunately, hipster staff are too cool to learn a new system, so we need you to build something that they will understand.

## Version 1
Implement a system that contains the business logic to produce receipts similar to this, based on a json price list and test orders. A sample .json file has been provided with the list of products sold at this particular coffee shop.

Here are some sample orders you can try - whether you use this information is up to you:

  Jane
  2 x Cafe Latte
  1 x Blueberry Muffin
  1 x Choc Mudcake

  John
  4 x Americano
  2 x Tiramisu
  5 x Blueberry Muffin

Your receipt must calculate and show the correct amount of tax (in this shop's case, 8.64%), as well as correct line totals and total amount. Do not worry about calculating discounts or change yet. Consider what output formats may be suitable.

## My approach (before)
* ideally thinking of splitting classes into:
    * Order, which will take the name of the person and their table number
    * Table, which will add together orders from the same table
    * Calculator, which will find the product and price, and times it by the quantity in the order, and adds on the tax
    * Receipt, which will print the total receipt for the table
* Will be TDDing with Jasmine


## User Stories

```
As a customer,
So that I can eat some delicious cake,
I'd like to be able to place an order

As a customer,
So that I can hang out with my friends,
I'd like the combined bill to come to our table

As a customer,
So that I'm not over or under paying,
I'd like the bill to be calculated accurately

As a customer,
So that I know I'm paying the correct amount of tax,
I'd like the restaurant's tax to be added to the bill automatically
```

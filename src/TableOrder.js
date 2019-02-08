function Table(table, ...theArgs) {
  this.table = table
  this.people = theArgs
  this.tableOrder = []
}

Table.prototype.combinePersonalOrders = function () {
  for (i = 0; i < this.people.length; i++) {
    this.tableOrder.push(this.people[i].completePersonalOrder)
  }
};

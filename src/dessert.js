'use strict';
class Dessert {
  constructor() { 
    this.options = ["Chocolate cake", "Jelly", "Cheesecake", "Apple Pie", "Lemon Meringue pie", "Mousse", "Ice-Cream", "Caramel Cake"]
  }
  all(){ 
    return this.options
  }
  random() { 
    return this.options.sort( () => Math.random() - 0.5 )[0]
  }
}

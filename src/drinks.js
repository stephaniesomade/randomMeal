'use strict' 

class Drinks { 
  constructor() { 
    this.options = ["Water", "Water", "Water", "Orange Juice", "Tropical Juice", "Apple Juice", "Cranberry Juice", "Ribena", "Squash", "Coke", "Fanta", "Tea", "Hot Chocolate"]
    this.type = ["HOT", "COLD", "FIZZY", "JUICE"]
    this.hot = ["Tea", "Hot Chocolate"]
    this.cold = ["Water", "Water", "Water", "Ribena", "Squash"]
    this.fizzy = ["Coke", "Fanta"]
    this.juice = ["Apple Juice", "Tropical Juice","Cranberry Juice", "Orange Juice"]
    // Water appears more than once to increase chances of Water being selected.
  }
  all() { 
    return this.options
  }
  preferences() {
    return this.type
  }
  hotDrinks() { 
    return this.hot
  }
  coldDrinks() { 
    return this.cold
  }
  fizzyDrinks() { 
    return this.fizzy
  }
  juiceDrinks() { 
    return this.juice
  }
  allRandom() {
    return this.options.sort( () => Math.random() - 0.5)[0]
  }
  hotRandom() { 
    return this.hot.sort( () => Math.random() - 0.5)[0]
  }
  coldRandom() { 
    return this.cold.sort( () => Math.random() - 0.5)[0]
  }
  fizzyRandom() { 
    return this.fizzy.sort( () => Math.random() - 0.5)[0]
  }
  juiceRandom() { 
    return this.juice.sort( () => Math.random() - 0.5)[0]
  }
}
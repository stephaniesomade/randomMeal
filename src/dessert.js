'use strict';
class Dessert {
  constructor() { 
    this.options = {"Chocolate cake": 350, "Jelly": 296, "Cheesecake": 300, "Apple Pie": 250, "Lemon Meringue pie": 290, "Mousse": 225, "Ice-Cream": 205, "Caramel Cake": 305 }
  }
    all(){ 
    let arr = []
    for (const key in this.options) { 
      arr.push(`${key}`)
    }
    return arr
  }
  random() {
    let arr = []
    for (const dessert in this.options) { 
      arr.push(`${dessert}`)
    }
    return arr.sort( () => Math.random() - 0.5 )[0]
  }
  calories(item) { 
    let cal;
    for (const dessert in this.options) { 
      if (item === dessert){
      return this.options[dessert]
      }
    }
  }
}

let dessert = new Dessert();
console.log(dessert.calories("jelly"));

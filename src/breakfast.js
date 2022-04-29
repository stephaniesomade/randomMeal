'use strict'; 

class Breakfast { 
  constructor() { 
    this.options =["Fruit and Fibre", "Coco Pops", "Crunchy Nut", "Golden Nuggets", "Toast", "Croissant and Tea", "Greek Yogurt and Apple chunks", "Full English Breakfast", "Pancakes", "Avacado Toast", "French Toast", "Oatmeal and fruits", "Scrambled Eggs", "Eggs Benedict", "Fruit Smoothie", "Omelette", "Granola Bars"]
  }
  all() { 
    return this.options
  }
  random() { 
    let meal = this.options.sort( () => Math.random() - 0.5 )[0]
    return meal
  }
}

let breakfast = new Breakfast(); 
console.log(breakfast.random())
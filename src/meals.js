'use strict'; 

class Meals { 
  constructor(){ 
    this.cuisine = ["English cuisine", "Italian cuisine", "Takeout", "Chinese cuisine", "Nigerian cuisine"]
    this.italian = ["Pizza","Cabonara", "Lasagne", "Spagetti", "Minestrone", "Ravioli", "Risotti", "Tagliatelle", "Gnocci"]
    this.english = ["Bangers and mash", "Fish and chips", "Sunday Roast"]
    this.takeOut = ["McDonalds", "Dominoes", "KFC Salad", "Taco Bell", "Nandos", "Pizza Hut"]
    this.chinese = ["Chicken and Sweetcorn Soup & Special Fried Rice", "House Special & Dim Sum", "Chicken Chow Mein & Spring Rolls", "Sweet and Sour Chicken", "Prawn Chow Mein"]
    this.nigerian = ["Pounded Yam", "Jollof Rice", "Rice & Stew", "Garri", "Eba", "Fried Rice"]
  }
  cuisineOptions() { 
    return this.cuisine
  }
  italianOptions() { 
    return this.italian
  }
  englishOptions() { 
    return this.english
  }
  takeOutOptions() { 
    return this.takeOut
  }
  chineseOptions() { 
    return this.chinese
  }
  nigerianOptions() { 
    return this.nigerian
  }
  italianRandom() { 
    return this.italian.sort( () => Math.random() - 0.5)[0]
  }
  englishRandom() { 
    return this.english.sort( () => Math.random() - 0.5)[0]
  }
  takeOutRandom() { 
    return this.takeOut.sort( () => Math.random() - 0.5)[0]
  }
  chineseRandom() { 
    return this.chinese.sort( () => Math.random() - 0.5)[0]
  }
  nigerianRandom() { 
    return this.nigerian.sort( () => Math.random() - 0.5)[0]
  }
}
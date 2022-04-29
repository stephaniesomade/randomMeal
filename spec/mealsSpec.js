'use strict'; 

describe('Meals', () => { 

  let meals

  beforeEach(() => { 
    meals = new Meals();
  });

  it('returns a list of cuisines', () => {
    expect(meals.cuisineOptions()).toEqual(["English cuisine", "Italian cuisine", "Takeout", "Chinese cuisine", "Nigerian cuisine"])
  });

  it('returns a list of Italian options', () => { 
    expect(meals.italianOptions()).toEqual(["Pizza","Cabonara", "Lasagne", "Spagetti", "Minestrone", "Ravioli", "Risotti", "Tagliatelle", "Gnocci"])
  })

  it('returns a list of English options', () => { 
    expect(meals.englishOptions()).toEqual(["Bangers and mash", "Fish and chips", "Sunday Roast"])
  })

  it('returns a list of takeOut options', () => { 
    expect(meals.takeOutOptions()).toEqual(["McDonalds", "Dominoes", "KFC Salad", "Taco Bell", "Nandos", "Pizza Hut"])
  })

  it('returns a list of Chinese options', () => { 
    expect(meals.chineseOptions()).toEqual(["Chicken and Sweetcorn Soup & Special Fried Rice", "House Special & Dim Sum", "Chicken Chow Mein & Spring Rolls", "Sweet and Sour Chicken", "Prawn Chow Mein"])
  })
  it('returns a list of Nigerian options', () => { 
    expect(meals.nigerianOptions()).toEqual(["Pounded Yam", "Jollof Rice", "Rice & Stew", "Garri", "Eba", "Fried Rice"])
  })


})
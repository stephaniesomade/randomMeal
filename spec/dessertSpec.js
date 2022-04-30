'use strict'; 

describe('Dessert', () => { 

  let dessert; 

  beforeEach(() => { 
    dessert = new Dessert();
  });

  it('has a list of desserts', () => { 
    expect(dessert.all()).toEqual(["Chocolate cake", "Jelly", "Cheesecake", "Apple Pie", "Lemon Meringue pie", "Mousse", "Ice-Cream", "Caramel Cake"]);
  });

  it('returns the number of calories in a cake', () =>{
    expect(dessert.calories("Chocolate cake")).toEqual(350)
  });

  it('returns the number of calories in a cheesecake', () => {
    expect(dessert.calories("Cheesecake")).toEqual(300);
  });

  it('returns a number of items with less than the requested calories', () => { 
    expect(dessert.max("300")).toEqual("Jelly, Apple Pie, Lemon Meringue pie, Mousse, Ice-Cream")
  })
});

  // {"Chocolate cake": 350, "Jelly": 296, "Cheesecake": 300, "Apple Pie": 250, "Lemon Meringue pie": 290, "Mousse": 225, "Ice-Cream": 205, "Caramel Cake": 305 }

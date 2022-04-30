'use strict'; 

describe('Dessert', () => { 

  let dessert; 

  beforeEach(() => { 
    dessert = new Dessert();
  });

  it('has a list of desserts', () => { 
    expect(dessert.all()).toEqual(["Chocolate cake", "Jelly", "Cheesecake", "Apple Pie", "Lemon Meringue pie", "Mousse", "Ice-Cream", "Caramel Cake"])
  });

  it('returns the number of calories in a cake', () =>{
    expect(dessert.calories("Chocolate cake")).toEqual(350)
  });
});

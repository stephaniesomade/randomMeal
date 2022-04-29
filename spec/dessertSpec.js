'use strict'; 

describe('Dessert', () => { 

  let dessert; 

  beforeEach(() => { 
    dessert = new Dessert();
  });

  it('has a list of desserts', () => { 
    expect(dessert.all()).toEqual(["Chocolate cake", "Jelly", "Cheesecake", "Apple Pie", "Lemon Meringue pie", "Mousse", "Ice-Cream", "Caramel Cake"])
  });
});

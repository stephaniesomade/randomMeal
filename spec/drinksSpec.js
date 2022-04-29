'use strict'; 

describe('Drinks', () => {

  let drinks; 

  beforeEach( () => { 
    drinks = new Drinks ();
  }); 

  it('returns a list of drinks', () => { 
    expect(drinks.all()).toEqual(["Water", "Water", "Water", "Orange Juice", "Tropical Juice", "Apple Juice", "Cranberry Juice", "Ribena", "Squash", "Coke", "Fanta", "Tea", "Hot Chocolate"])
  });

  it('returns a list of preferences', () => { 
    expect(drinks.preferences()).toEqual(["HOT", "COLD", "FIZZY", "JUICE"])
  }); 

  it('returns a list of only hot drinks', () => {
    expect(drinks.hotDrinks()).toEqual(["Tea", "Hot Chocolate"])
  });

  it('returns a list of only cold drinks', () => { 
    expect(drinks.coldDrinks()).toEqual(["Water", "Water", "Water", "Ribena", "Squash"])
  });

  it('returns a list of fizzy drinks', () => { 
    expect(drinks.fizzyDrinks()).toEqual(["Coke", "Fanta"])
  });

  it('returns a list of juices', () => { 
    expect(drinks.juiceDrinks()).toEqual(["Apple Juice", "Tropical Juice","Cranberry Juice", "Orange Juice"])
  });
});
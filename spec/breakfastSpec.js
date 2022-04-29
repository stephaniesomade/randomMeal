'use strict'; 

describe('Breakfast', () => {

  let breakfast;

  beforeEach(() => { 
    breakfast = new Breakfast();
  });

  it('returns a list of breakfast options', () => { 
    expect(breakfast.all()).toEqual(["Fruit and Fibre", "Coco Pops", "Crunchy Nut", "Golden Nuggets", "Toast", "Croissant and Tea", "Greek Yogurt and Apple chunks", "Full English Breakfast", "Pancakes", "Avacado Toast", "French Toast", "Oatmeal and fruits", "Scrambled Eggs", "Eggs Benedict", "Fruit Smoothie", "Omelette", "Granola Bars"])
  });
})
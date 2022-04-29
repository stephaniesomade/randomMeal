document.addEventListener("DOMContentLoaded", () => { 
  let meals = new Meals()
  let drinks = new Drinks();
  let breakfast = new Breakfast(); 
  let dessert = new Dessert();

  document.querySelector('#breakfastButton').addEventListener('click', () => {
  document.querySelector('#breakfast').innerText = breakfast.random();
  });

  document.querySelector('#hot').addEventListener('click', () => {
  document.querySelector('#option').innerText = drinks.hotRandom();
  });

  document.querySelector('#cold').addEventListener('click', () => {
  document.querySelector('#option').innerText = drinks.coldRandom();
  });
  
  document.querySelector('#fizzy').addEventListener('click', () => {
  document.querySelector('#option').innerText = drinks.fizzyRandom();
  });

  document.querySelector('#juice').addEventListener('click', () => {
  document.querySelector('#option').innerText = drinks.juiceRandom();
  });

  document.querySelector('#drinksButton').addEventListener('click', () => {
  document.querySelector('#option').innerText = drinks.allRandom();
  });
  
  
});
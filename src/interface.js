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

  document.querySelector('#English').addEventListener('click', () => {
  document.querySelector('#dinner').innerText = meals.englishRandom();
  });

  document.querySelector('#Italian').addEventListener('click', () => {
  document.querySelector('#dinner').innerText = meals.italianRandom();
  });

  document.querySelector('#Chinese').addEventListener('click', () => {
  document.querySelector('#dinner').innerText = meals.chineseRandom();
  });

  document.querySelector('#Nigerian').addEventListener('click', () => {
  document.querySelector('#dinner').innerText = meals.nigerianRandom();
  });

  document.querySelector('#Takeout').addEventListener('click', () => {
  document.querySelector('#dinner').innerText = meals.takeOutRandom();
  });
        
  document.querySelector('#dinnerButton').addEventListener('click', () => {
  document.querySelector('#dinner').innerText = meals.cuisineRandom();
  });

  document.querySelector('#dessert').addEventListener('click', () => {
  document.querySelector('#dessertOption').innerText = dessert.random();
  });
});
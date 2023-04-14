const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');
let itemsList = [];

const newItem = ingredients.map(item => {  
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = item;
  itemsList.push(li);

})
ingredientList.append(...itemsList);
console.log(ingredientList);



/*const li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
  ingredientList.append(li);
  return ingredientList;*/



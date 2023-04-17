const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');

const newItem = ingredients.map(item => {  
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = item;
  return li;
})
ingredientList.append(...newItem);
console.log(ingredientList);



/*const li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
  ingredientList.append(li);
  return ingredientList;*/



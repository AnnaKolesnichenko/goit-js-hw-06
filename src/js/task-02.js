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
  li.textContent = item;
  li.classList.add('item');
  ingredientList.append(li);
  return ingredientList;
})
console.log(ingredientList);

/*for(let i = 0; i < ingredients.length; i ++) {
  const ingItem = ingredients[i];
  const li = document.createElement('li');
  li.textContent = ingItem;
  ingredientList.append(li);
}*/



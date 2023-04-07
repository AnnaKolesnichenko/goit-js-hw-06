const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');
console.log(ingredientList);
const li = document.createElement('li');

ingredients.forEach((item, i) => 
{
  ingredientList.append(item[i]);
});

for(let i = 0; i <= ingredients.length; i ++) {

  ingredientList.append(li.textContent = ingredients[i]);
}


console.log(ingredientList);

/*const li = document.createElement('li');
for(let i = 0; i <= ingredients.length; i++) {
  li.textContent = ingredients[i];
  console.log(li);
}*/


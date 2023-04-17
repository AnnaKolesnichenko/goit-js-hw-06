'use strict';


//TASK 1
const listOfCategories = document.querySelector("#categories");//all UL of categories
const categoryItem = document.querySelectorAll(".item");//every .item li

console.log(`Number of categories: ${categoryItem.length}`);
/*categoryItem.forEach(item => {
    const links = item.querySelectorAll('.item ul');
    const title = item.querySelector('.item h2');
    //console.log(links);
    links.forEach(item => {
        const items = item.querySelectorAll('li');
        //console.log(items.length);
        console.log(`Category: ${title.textContent}\n Elements: ${items.length}`);
})
})*/

categoryItem.forEach(item => {
    //const links = item.querySelectorAll('.item ul');
    const links = item.lastElementChild.children;
    const title = item.firstElementChild;
    console.log(`Category: ${title.textContent}\n Elements: ${links.length}`)

})


/*

const itemTitle = document.querySelectorAll("h2");//all h2 in UL
console.log(itemTitle);
itemTitle.forEach(item => console.log(item.textContent));

const firstItem = listOfCategories.firstElementChild;//first li.item
const lastItem = listOfCategories.lastElementChild;//second li.item
const middleItem = firstItem.nextElementSibling;//third li.item
const listChildren = listOfCategories.children;
const childList = document.querySelectorAll(".item > ul");



const listAnimals = firstItem.querySelectorAll('li');
const listProducts = middleItem.querySelectorAll('li');
const listTechnologies = lastItem.querySelectorAll('li');




/*const body = document.body;
console.log(body);
const firstBodyChild = body.firstElementChild;
console.log(firstBodyChild);
const categoriesList = firstBodyChild.nextElementSibling;
console.log(categoriesList);
const categoryChildren = categoriesList.children;
console.log(categoryChildren);*/

/*const nextList = document.querySelector('.item > ul');
console.log(nextList);
const nextListItems = nextList.querySelectorAll('li');
console.log(nextListItems);*/













const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

function createImgGallery(items) {
  return items.map(item => {
    return `
    <li>
      <img class="img-item" src="${item.url}" alt="${item.alt}"/>
    </li>
  `;
  }).join('');
} 
const newImg = createImgGallery(images);
console.log(newImg);
galleryList.insertAdjacentHTML('afterbegin', newImg);

/* const imgLi = document.createElement('li');
  const img = document.createElement('img');
  imgLi.insertAdjacentElement('afterbegin', img);
  imgLi.classList.add('img-item');
  img.src = item.url;
  img.alt = item.alt;
  
  galleryList.append(imgLi);
  return galleryList;*/



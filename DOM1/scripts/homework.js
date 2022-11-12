const root_elem = document.querySelector('#root');

const card = document.createElement('div');
const art = document.createElement('p');
const title = document.createElement('p');
const price = document.createElement('p');

art.innerText = 'Artikel : 1234';
title.innerText = 'Title: Iphone 13 Pro';
price.innerText = 'Price: 1300$';

card.classList.add('card');

card.append(art, title, price);
root_elem.append(card);

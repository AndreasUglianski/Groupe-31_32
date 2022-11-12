const root_elem = document.querySelector('#root');

const card = document.createElement('div');
const firstname_elem = document.createElement('p');
const lastname_elem = document.createElement('p');
const photo_elem = document.createElement('img');
const email_elem = document.createElement('a');
const id_elem = document.createElement('p');
const age_elem = document.createElement('p');
const salary_elem = document.createElement('p');

firstname_elem.innerText = 'First name: Olga';
lastname_elem.innerText = 'Last name: Petrova';
email_elem.innerText = 'example@gmail.com';
id_elem.innerText = 'ID: 1';
age_elem.innerText = 'Age: 18';
salary_elem.innerText = ' 1500';

photo_elem.setAttribute('src', 'https://reqres.in/img/faces/12-image.jpg');
photo_elem.setAttribute('alt', 'photo');
email_elem.setAttribute('href', 'mailto:example@gmail.com');

card.classList.add('card'); /// добавляем класс элементу card
photo_elem.classList.add('photo');

card.append(
	id_elem,
	firstname_elem,
	lastname_elem,
	age_elem,
	salary_elem,
	email_elem,
	photo_elem
);

root_elem.append(card);

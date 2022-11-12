const formElem = document.querySelector('.form');
const cardsContainer = document.querySelector('.cards_container');

formElem.addEventListener('submit', (event) => {
	// event - это событие...
	event.preventDefault(); //запрещает обновлять страницу после отправки формы
	// console.log(event); // событие
	// console.log(event.target); // элемент с которым происходит событие
	// console.log(event.target.city); // конкретный инпут по атрибуту name
	// console.log(event.target.city.value); // данные из инпута

	const card = document.createElement('div');
	const nameElem = document.createElement('p');
	const ageElem = document.createElement('p');
	const cityElem = document.createElement('p');

	const { name, age, city } = event.target; //создаем три переменные и достаем name:

	nameElem.innerText = `Name: ${name.value}`; //
	ageElem.innerText = `Age: ${age.value}`;
	cityElem.innerText = `City: ${city.value}`;

	card.classList.add('card');

	card.append(nameElem, ageElem, cityElem);
	cardsContainer.append(card);

	name.value = '';
	age.value = '';
	city.value = '';
});

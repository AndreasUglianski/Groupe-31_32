const rootElem = document.querySelector('#root');
const form = document.querySelector('.form');
let cards_info = [];

const render = () => {
	rootElem.innerText = ''; /// очищаем контейнер перед новым рендером

	cards_info.forEach(({ name, lastname, email, photo }) => {
		const cardElem = document.createElement('div');
		const nameElem = document.createElement('p');
		const emailElem = document.createElement('a');
		const photoElem = document.createElement('img');

		nameElem.innerText = `Name: ${name} ${lastname}`;
		emailElem.innerText = email;
		emailElem.href = `mailto:${email}`;
		photoElem.src = photo;
		photoElem.alt = 'photo';

		photoElem.classList.add('img');
		cardElem.classList.add('card');

		cardElem.append(nameElem, emailElem, photoElem);
		rootElem.append(cardElem);
	});
};

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const { name, lastname, email, photo } = event.target;

	cards_info.push({
		name: name.value,
		lastname: lastname.value,
		email: email.value,
		photo: photo.value,
	});

	name.value = '';
	lastname.value = '';
	email.value = '';
	photo.value = '';

	render();
});

//Что мы делаем:
//1. при отправке формы данные записываются в массив cards_info в виде объектов
//2. из массива с {} достаем данные и рендерим из них карточки

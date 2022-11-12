// Имя фамилия, возраст, пол. В зависимости от пола цвет заднего фона

const userForm = document.querySelector('.user_form');
const userContainer = document.querySelector('.users_container');

const request = (num) => {
	fetch(`https://dummyjson.com/users/${num}`)
		.then((resp) => resp.json())
		.then((json) => render(json));
};

const render = ({ firstName, lastName, age, gender }) => {
	userContainer.innerText = '';
	const userCard = document.createElement('div');
	const nameElem = document.createElement('p');
	const ageElem = document.createElement('p');
	const genderElem = document.createElement('p');

	nameElem.innerText = `Name: ${firstName} ${lastName}`;
	ageElem.innerText = `Age: ${age}`;
	genderElem.innerText = `Gender: ${gender}`;

	const cardBackground = gender === 'male' ? 'lightgreen' : 'lightpink';

	userCard.style.backgroundColor = cardBackground;
	userCard.classList.add('user_card');
	userCard.append(nameElem, ageElem, genderElem);
	userContainer.append(userCard);
};
request(3);

userForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const id = event.target.id_number.value;

	request(id);
	event.target.id_number = '';
});

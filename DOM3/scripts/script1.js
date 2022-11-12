//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст.
//Поля ввода должны включать "текст-подсказку".Форма должна собирать полученные данные,
//а затем формировать карточки работников с полученной информацией.

const formElem = document.querySelector('.form');
const containerElem = document.querySelector('.container');

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку
// работника его зарплату.Зарплата рассчитывается через умножение ставки на количество дней.

formElem.addEventListener('submit', (event) => {
	event.preventDefault();

	const card = document.createElement('div');
	const nameElem = document.createElement('p');
	const lastnameElem = document.createElement('p');
	const ageElem = document.createElement('p');
	const salaryElem = document.createElement('p');
	//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.

	const photoElem = document.createElement('img');

	const { name, lastname, age, rate, days, photo } = event.target;
	nameElem.innerText = `Name: ${name.value}`;
	lastnameElem.innerText = `Lastname: ${lastname.value}`;
	ageElem.innerText = `Age: ${age.value}`;
	salaryElem.innerText = `Salary: ${rate.value * days.value}`;
	photoElem.setAttribute('src', photo.value);
	photoElem.setAttribute('alt', 'photo');
	photoElem.classList.add('img');

	card.classList.add('card');
	card.append(nameElem, lastnameElem, ageElem, salaryElem, photoElem);
	containerElem.append(card);

	name.value = '';
	lastname.value = '';
	age.value = '';
	rate.value = '';
	days.value = '';
	photo.value = '';
});

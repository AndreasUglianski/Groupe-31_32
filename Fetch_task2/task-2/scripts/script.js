const cards_container = document.querySelector('.cards_container');

const render = (json_data) => {
	cards_container.innerText = '';
	const cards = json_data.map(({ avatar, first_name }) => {
		const card = document.createElement('div');
		const avatarElem = document.createElement('img');
		const nameElem = document.createElement('p');

		avatarElem.src = avatar;
		avatarElem.alt = 'avatar';

		nameElem.innerText = first_name;

		card.append(avatarElem, nameElem);
		return card;
	});

	cards_container.append(...cards);
};

const request = (num) => {
	fetch(`https://reqres.in/api/users?page=${num}`) /// num-нумерация страницы 1 или 2,
		.then((resp) => resp.json())
		.then((json) => render(json.data));
};
request(1); ///передаем также при выводе функции . по умолчанию 1

const [first_btn, second_btn] = document.querySelectorAll('.triggers button'); ///деструктурируем triggers

first_btn.addEventListener('click', () => request(1));
second_btn.addEventListener('click', () => request(2));

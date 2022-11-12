const cards_container = document.querySelector('.cards_container');

fetch('https://reqres.in/api/users') // отправляем запрос
	.then((resp) => resp.json()) // получаем ответ, преобразовываем в json
	.then((json) => render(json.data)); // получаем json, что-то делаем с json (тут выводим в консоль)

//json.data => json_data (переменная, может быть любое название)

const render = (json_data) => {
	json_data.forEach(({ first_name, email, avatar }) => {
		const card = document.createElement('div');
		const avatarElem = document.createElement('img');
		const firstnameElem = document.createElement('p');
		const emailElem = document.createElement('a');

		firstnameElem.innerText = first_name;
		emailElem.innerText = email;

		card.classList.add('card');

		avatarElem.src = avatar;
		avatarElem.alt = 'photo';
		emailElem.href = `mailto:${email}`;

		card.append(avatarElem, firstnameElem, emailElem);
		cards_container.append(card);
	});
};

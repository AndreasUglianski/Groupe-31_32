const data = [
	{
		id: 1,
		name: 'Анатолий',
		email: 'anatoliy@mail.ru',
		avatar: '../media/face.jpeg',
	},
	{
		id: 2,
		name: 'Максим',
		email: 'maxim@mail.ru',
		avatar: '../media/face.jpeg',
	},
	{
		id: 3,
		name: 'Антон',
		email: 'anton@mail.ru',
		avatar: '../media/face.jpeg',
	},
	{
		id: 4,
		name: 'Олег',
		email: 'oleg@mail.ru',
		avatar: '../media/face.jpeg',
	},
];

const root_elem = document.querySelector('#root');

function getCard(name, email, avatar) {
	const card = document.createElement('div');
	const name_elem = document.createElement('p');
	const email_elem = document.createElement('a');
	const avatar_elem = document.createElement('img');

	card.classList.add('card');

	name_elem.innerText = name;
	email_elem.innerText = email;
	email_elem.href = 'mailto: ' + email;
	avatar_elem.src = avatar;
	card.append(avatar_elem, name_elem, email_elem);
	return card;
}

data.forEach((user) => {
	const card = getCard(user.name, user.email, user.avatar);
	root_elem.append(card);
});

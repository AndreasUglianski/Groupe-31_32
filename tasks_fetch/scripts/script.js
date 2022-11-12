const rootElem = document.querySelector('#root');

// написать функцию, которая получает в качестве аргумента объект с данными пользователя
// и возвращает div с картинкой, именем и почтой пользователя

const user = {
	data: {
		avatar: 'https://reqres.in/img/faces/1-image.jpg',
		email: 'george.bluth@reqres.in',
		first_name: 'George',
	},
};

function addUser(user) {
	const container = document.createElement('div');

	const img = document.createElement('img');
	img.src = user.data.avatar;

	const a = document.createElement('a');
	a.innerText = user.data.email;
	a.href = `mailto:${user.data.email}`;

	const p = document.createElement('p');
	p.innerText = user.data.first_name;

	container.append(img, p, a);
	rootElem.append(container);
}

function getUser(user_id) {
	fetch(`https://reqres.in/api/users/${user_id}`)
		.then(
			(resp) => resp.json(),
			(error) => console.log(error)
		)
		.then(
			(resp) => addUser(resp),
			(error) => console.log(error)
		);
}

// fetch('https://jsonplaceholder.typicode.com/users') // отправляем запрос
// 	.then((response) => response.json()) // получили ответ , преобразовали методом json
// 	.then((json_data) => console.log(json_data)); // получили данные (json), вывели данные в консоль

//     .then - // это обработчик промиса

// fetch('https://jsonplaceholder.typicode.com/users/8')
// 	.then((resp) => resp.json())
//     .then((json) => console.log(json));

// fetch('https://reqres.in/api/users?page=1')
// 	.then((res) => res.json())
// 	.then((json) => console.log(json.data)); //нужный массив лежит в обьекте под ключом data

const cards_container = document.querySelector('.cards_container');

fetch('https://jsonplaceholder.typicode.com/users/1')
	.then((resp) => resp.json())
	.then((json) => render(json));

const render = (json) => {
	const card = document.createElement('div');
	const nameElem = document.createElement('p');
	const usernameElem = document.createElement('p');
	const phoneElem = document.createElement('p');

	nameElem.innerText = `Name: ${json.name}`;
	usernameElem.innerText = `Username: ${json.username}`;
	phoneElem.innerText = `Phone: ${json.phone}`;

	card.append(nameElem, usernameElem, phoneElem);
	cards_container.append(card);
};

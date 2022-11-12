const data = [
	{
		id: 1,
		title: 'Велосипед',
		price: 100,
	},

	{
		id: 2,
		title: 'Самокат',
		price: 500,
	},

	{
		id: 3,
		title: 'Скейт',
		price: 200,
	},
];

const root_elem = document.querySelector('#root');

data.forEach(({ id, title, price }) => {
	const card_elem = document.createElement('div');
	const id_elem = document.createElement('p');
	const title_elem = document.createElement('p');
	const price_elem = document.createElement('p');

	// const {id, title, price} = product // деструктуризация
	//

	id_elem.innerText = `ID: ${id}`;
	title_elem.innerText = `Title: ${title} `;
	price_elem.innerText = `Price: ${price}`;

	card_elem.classList.add('card');

	card_elem.append(id_elem, title_elem, price_elem);

	root_elem.append(card_elem);
});

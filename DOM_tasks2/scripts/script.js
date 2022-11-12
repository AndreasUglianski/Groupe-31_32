const form = document.querySelector('#add_product_form');
const products = document.querySelector('#products');

const getCard = (title, price) => {
	const container = document.createElement('div');
	const title_p = document.createElement('p');
	const price_p = document.createElement('p');
	title_p.innerText = title;
	price_p.innerText = price;
	container.append(title_p, price_p);
	return container;
};

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const { title, price } = event.target;
	const card = getCard(title.value, price.value);
	products.append(card);
});

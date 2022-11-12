const buttonElem = document.querySelector('.btn');
const containerElem = document.querySelector('#container');

buttonElem.addEventListener('click', () => {
	const text = document.createElement('p');
	text.innerText =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem harum nostrum nemo ab, ipsam magnam a commodi quam eum, ex dolor voluptatibus deserunt veniam facilis dolorum eligendi asperiores, consequuntur perspiciatis!';
	text.classList.add('text');
	containerElem.append(text);
});

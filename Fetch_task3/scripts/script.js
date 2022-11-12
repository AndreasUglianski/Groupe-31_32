const rootElem = document.querySelector('#root');

const [left_btn, right_btn] = document.querySelectorAll('.triggers button');

left_btn.addEventListener('click', () => request(--idNum));
right_btn.addEventListener('click', () => request(++idNum));

let idNum = 1;
const request = (num) => {
	fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
		.then((resp) => resp.json())
		.then((json) => render(json));
};

const render = ({ title, completed }) => {
	rootElem.innerText = '';
	const card = document.createElement('div');
	const titleElem = document.createElement('p');
	const statusElem = document.createElement('p');

	const status = completed ? 'done' : 'not done';
	const background = completed ? 'lightgreen' : 'lightgray';

	titleElem.innerText = `Task: ${title}`;
	statusElem.innerText = `Status: ${status}`;

	card.classList.add('card');
	card.style.backgroundColor = background;

	card.append(titleElem, statusElem);
	rootElem.append(card);
};
request(idNum);

const btn = document.querySelector('.btn');
const container = document.querySelector('#container');

btn.addEventListener('click', () => {
	const containerElem = document.createElement('div');
	containerElem.classList.add('elem');
	container.append(containerElem);
});

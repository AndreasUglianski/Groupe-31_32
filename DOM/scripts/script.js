// querySelector метод, возвращающий элемент по селектору
// const main_p = document.querySelector('.main');

// querySelectorAll метод, возвращающий итерируемый объект (NodeList) по селектору
// const p_list = document.querySelectorAll('p');
// console.log(p_list);

// getElementsByClassName метод, возвращающий итерируемый объект
// (HTMLCollection) по селектору
// const main_p = document.getElementsByClassName('main')[0];
// console.log(main_p);

// const prod_p = document
// 	.getElementsByClassName('products')[0]
// 	.getElementsByTagName('p')[0];

// const prod_p = document.querySelector('.products p');

// addEventListener позволяет повесить событие (в данном случае click) на параграф prod_p
// и при этом событии выполнится callback функция

// prod_p.addEventListener('click', () => {
// 	prod_p.innerText = 'Товары';
// });

//1) найти параграф с тектом "Важный текст" и заменить его на "Не такой уж и важный текст"

// const texp_p = document.querySelector('.main p');
// texp_p.innerText = 'Не такой уж и важный текст';

// const media_p = document.querySelector('.media .fb a');
// media_p.innerText = 'facebook';

// const change_point1 = document.querySelector('.point_1');
// const change_point2 = document.querySelector('.point_2');
// const change_point3 = document.querySelector('.point_3');

// change_point1.addEventListener('click', () => {
// 	change_point1.innerText = 'point 1';
// });
// change_point2.addEventListener('click', () => {
// 	change_point2.innerText = 'point 2';
// });
// change_point3.addEventListener('click', () => {
// 	change_point3.innerText = 'point 3';
// });

// const main_elem = document.querySelector('.main');

///объявить функцию, которая возвращает случайное число от 0 до 255

('rgb(124, 23, 45)');
// реализовать функцию random_color, которая возвращает случайный цвет в формате rgb

// const random_color = () => {
// 	const r = Math.round(Math.random() * 255);
// 	const g = Math.round(Math.random() * 255);
// 	const b = Math.round(Math.random() * 255);
// 	return `rgb(${r}, ${g}, ${b})`;
// };
// main_elem.addEventListener('click', () => {
// 	main_elem.style.color = random_color();
// 	main_elem.style.backgroundColor = random_color();
// 	main_elem.style.padding = '20px';
// });

const main_elem = document.querySelector('.main');
main_elem.addEventListener('click', () => {
	const value = main_elem.innerText;
	main_elem.innerText = +value + 1;
});

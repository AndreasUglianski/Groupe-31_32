import React from 'react';
import s from './index.module.css';

export default function Product({ title, description, price, images }) {
	return (
		<div className={s.product_card}>
			<img src={images[0]} alt='pic' className={s.product_picture} />
			<p>Title: {title}</p>
			<p>Description: {description}</p>
			<p>Price: {price}</p>
		</div>
	);
}

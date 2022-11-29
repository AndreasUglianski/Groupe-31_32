import React from 'react';
import s from './index.module.css';

export default function Product({ title, description }) {
	return (
		<div className={s.product_card}>
			<p>Title: {title}</p>
			<p>Description: {description}</p>
		</div>
	);
}

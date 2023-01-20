import React from 'react';
import s from './index.module.css';

export default function ProductCard({ id, title, price, image }) {
	return (
		<div className={s.product_card}>
			<div>
				<img src={image} alt={title} />
				<button>Add to cart</button>
			</div>

			<p>{title}</p>
		</div>
	);
}

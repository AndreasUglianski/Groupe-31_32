import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function ProductCard({ title, price, images, product }) {
	return (
		<div className={s.product_card}>
			<Link to={`/product/${product.id}`}>
				<img src={images[0]} alt={title} />
				<h3>Title: {title}</h3>
				<p>Price: {price} $ </p>
			</Link>
		</div>
	);
}

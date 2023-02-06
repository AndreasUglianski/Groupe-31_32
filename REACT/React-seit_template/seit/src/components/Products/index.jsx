import React from 'react';
import ProductCard from '../ProductCard';
import { products } from './data/products';
import s from './index.module.css';

export default function Products() {
	return (
		<div className={s.products_container}>
			{products.map((el) => (
				<ProductCard key={el.id} {...el} />
			))}
		</div>
	);
}

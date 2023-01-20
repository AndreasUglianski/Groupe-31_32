import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { load_products } from '../../requests/products_req';
import { useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import s from './index.module.css'

export default function ProductsPage() {
	const { category } = useParams();

	const category_up = category[0].toUpperCase() + category.slice(1);

	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(load_products(category));
	}, []);

	// console.log(products)

	return (
		<div>
			<p>{category_up}</p>
			<div className={s.products}>
				{products.map((el) => (
					<ProductCard key={el.id} {...el} />
				))}
			</div>
		</div>
	);
}

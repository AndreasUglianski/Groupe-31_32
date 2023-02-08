import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { all_Products } from '../../requests/products_req';
import ProductsCard from '../../components/ProductsCard';
import s from './index.module.css';
import { useParams } from 'react-router-dom';

export default function ProductsPage() {
	const dispatch = useDispatch();

	const { id } = useParams();
	const products = useSelector((state) => state.allProducts);

	useEffect(() => {
		dispatch(all_Products(id));
	}, [dispatch, id]);

	// console.log(products);

	return (
		<section className={['wrapper', s.products_category].join(' ')}>
			
			<div className={s.products}>
				{products.map((el) => (
					<ProductsCard key={el.id} {...el} />
				))}
			</div>
		</section>
	);
}

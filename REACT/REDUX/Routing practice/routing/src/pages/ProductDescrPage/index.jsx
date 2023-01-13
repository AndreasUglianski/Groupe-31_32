import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../requests/product';
import s from './index.module.css';

export default function ProductDescrPage() {
	const [product, setProduct] = useState({});

	const { id } = useParams();

	useEffect(() => {
		getProduct(setProduct, id);
	}, []);

	// console.log(product);

	const { title, description, price, images } = product;

	console.log(images);

	return (
		<div className={s.product_descr}>
			{images && <img src={images[0]} alt={title} />}
			<div className={s.info_block}>
				<p className={s.title}>{title}</p>
				<p className={s.descr}>{description}</p>
				<p className={s.price}>
					<span>Price:</span> {price}$
				</p>
			</div>
		</div>
	);
}

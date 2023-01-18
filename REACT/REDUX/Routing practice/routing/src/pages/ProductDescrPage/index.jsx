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

	const { images, title, price, description } = product;

	return (
		<div className={s.product_descr}>
			{images && <img src={images[0]} alt={title} />}
			<div className={s.info_bock}>
				<p className={s.title}>Title: {title}</p>
				<p className={s.descr}>Description: {description}</p>
				<p className={s.price}>
					<span>Price: $</span>
					{price}
				</p>
			</div>
		</div>
	);
}

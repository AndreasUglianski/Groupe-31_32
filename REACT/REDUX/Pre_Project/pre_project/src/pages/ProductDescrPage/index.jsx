import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { load_product } from '../../requests/product_item_req';
import { useDispatch, useSelector } from 'react-redux';
import s from './index.module.css';

export default function ProductDescrPage() {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product_item);

	const { id } = useParams();

	useEffect(() => {
		dispatch(load_product(id));
	}, []);

	const { title, description, price, image } = product;

	return (
		<div className={s.product_descr}>
			{image && <img src={image} alt={title} />}
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

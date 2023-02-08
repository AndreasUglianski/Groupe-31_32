import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function ProductsCard({
	id,
	title,
	image,
	price,
	discont_price,
}) {
	const product_url = `/product/${id}`;

	return (
		<div className={s.products_card}>
			<img src={`http://127.0.0.1.:3333${image}`} alt={title} />

			<div className={s.prices}>
				<p className={s.discount_price}>{discont_price}$</p>
				<p className={s.price}>{price}$</p>
				<p className={s.discount}>
					-{Math.round(((price - discont_price) * 100) / price)}%
				</p>
			</div>

			<div className={s.proucts_title}>
				<Link to={product_url}>
					<p>{title}</p>
				</Link>
			</div>
		</div>
	);
}

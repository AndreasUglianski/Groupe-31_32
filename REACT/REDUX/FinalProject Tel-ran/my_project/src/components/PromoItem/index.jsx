import React from 'react'
import s from './index.module.css'

export default function PromoItem({image, title, price, discont_price, id}) {
	return (
		<div>
			<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
			<p className={s.discount_price}>{discont_price}€</p>
			<p className={s.price}>{price}€</p>
			<p className={s.discount}>
				-{Math.round(((price - discont_price) * 100) / price)}%
			</p>
		</div>
	);
}

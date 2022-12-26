import React from 'react'
import s from './index.module.css'

export default function ProductCard({image, title, price, description}) {
  return (
		<div className={s.product_card}>
			<img src={image} alt={title} />
			<div className={s.descr_block}>
				<h3> {title}</h3>
				<p>Description:{description}</p>
				<p>Price: {price} $</p>
			</div>
		</div>
	);
}

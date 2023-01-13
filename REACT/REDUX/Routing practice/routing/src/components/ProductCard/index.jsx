import React from 'react'
import s from './index.module.css'

export default function ProductCard({title, price, images}) {
  return (
		<div className={s.product_card}>
			<img src={images[0]}  alt={title}/>
			<p>{title}</p>
			<p>Price: {price}$</p>
		</div>
	);
}

import React from 'react';
import s from './index.module.css';

export default function CartCard({ id, title, image, price, count }) {
	return (
		<div className={s.card}>
			<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
			<div className={s.description}>
				<p>{title}</p>
				<div className={s.triggers}>
					<button>+</button>
					<button>-</button>
				</div>
			</div>

			<p>
				{price}$ x {count} = {price * count}$
			</p>
		</div>
	);
}

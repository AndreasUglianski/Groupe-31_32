import React from 'react';
import s from './index.module.css';
import image from './media/flowers.png';

export default function Sales() {
	return (
		<section className={['wrapper', s.container].join(' ')}>
			<div className={s.headers}>
				<p>New season</p>
				<h2>Sale</h2>
				<div className={s.buttons}>
					<button className={s.promo_btn}>All promotions</button>
					<button className={s.learn_more_btn}>Learn more</button>
				</div>
			</div>

			<div className={s.image}>
				<img src={image} alt='flowers' />
			</div>
		</section>
	);
}

import React from 'react';
import s from './index.module.css';
import image from './media/gnome.png';

export default function DiscountCoupon() {
	return (
		<section className={['wrapper', s.container].join(' ')}>
			<div className={s.image}>
				<img src={image} alt='gnome' />
			</div>
			<div className={s.info_block}>
				<h2>Discount 5%</h2>
				<p>for the first order</p>

				<form className={s.coupon_form}>
					<input type='tel' name='' placeholder='+49' />
					<button>Get a discount</button>
				</form>
			</div>
		</section>
	);
}

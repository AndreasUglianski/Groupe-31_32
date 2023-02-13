import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/CartCard';
import s from './index.module.css';

export default function CartPage() {

  const cart = useSelector((state) => state.cart);
  
  // console.log(cart);

  return (
		<section className={['wrapper', s.cart_page].join(' ')}>
			<div className={s.subheader_cart}>
				<h2>Shopping cart</h2>
				<div className={s.return_block}>
					<div className={s.home}>
						<p>Home</p>
						<span>/</span>
						<p>Cart</p>
          </div>
          <div className={s.back_shoping}>
            <p>Back to the store </p>
            <span>&gt;</span>
          </div>
				</div>
			</div>
			<div className={s.general_block}>
				<div className={s.info_block}>
					{cart.map((el) => (
						<CartCard key={el.id} {...el} />
					))}
				</div>
				<div className={s.cart_details_block}>
					<h3>Order details</h3>
					<p>Total:</p>
					<button>Order</button>
					<button>Clear Cart</button>
				</div>
			</div>
		</section>
	);
}

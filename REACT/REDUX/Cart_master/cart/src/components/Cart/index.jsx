import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../CartCard';
import { clearCart } from '../../store/reducers/cartReducer';

export default function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const clear_cart = () => dispatch(clearCart());

	const total = cart.reduce(
		(prev, { price, count }) => prev + price * count,
		0
	);

	return (
		<div>
			<p>Cart:</p>
			<div>
				{cart.map((el) => (
					<CartCard key={el.id} {...el} />
				))}
			</div>
			<div>
				<p>Total: {total}</p>
				<button onClick={clear_cart}>Clear cart</button>
			</div>
		</div>
	);
}

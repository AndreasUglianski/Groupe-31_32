import React from 'react';
import s from './index.module.css';
import {
	deleteCard,
	incrementCount,
	decrementCount,
} from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';

export default function CartCard({ id, title, price, count }) {
	const dispatch = useDispatch();
	const delete_card = () => dispatch(deleteCard(id));
	const increment_count = () => dispatch(incrementCount(id));
	const decrement_count = () => dispatch(decrementCount(id));

	return (
		<div className={s.cart_card}>
			<p>{title}</p>
			<p>{price * count}</p>
			<p>{count}</p>
			<div className={s.triggers}>
				<button onClick={decrement_count}>-</button>
				<button onClick={increment_count}>+</button>
			</div>
			<button onClick={delete_card}>X</button>
		</div>
	);
}

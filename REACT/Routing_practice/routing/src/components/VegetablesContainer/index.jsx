import React from 'react';
import Vegetables from '../Vegetable';
import { vegetables } from '../../data/vegetables';

export default function VegetablesContainer() {
	return (
		<div>
			{vegetables
				.sort((a, b) => a.price - b.price)
				.map((el) => (
					<Vegetables key={el.id} {...el} />
				))}
		</div>
	);
}

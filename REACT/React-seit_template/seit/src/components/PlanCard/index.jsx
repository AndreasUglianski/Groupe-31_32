import React from 'react';
import PlanCardItem from '../PlanCardItem';
import s from './index.module.css';

export default function PlanCard({
	type,
	description,
	price,
	contacts,
	items,
}) {
	return (
		<div className={s.card}>
			<p>{type}</p>
			<p>{description}</p>
			<p>
				Starts at{' '}
				<span>
					$<span>{price}</span>
				</span>
			</p>
			<p>/month based on{contacts} contacts</p>
			<div>
				{items.map((el) => (
					<PlanCardItem key={el.id} {...el} />
				))}
			</div>
		</div>
	);
}

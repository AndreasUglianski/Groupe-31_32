import React from 'react';
import s from './index.module.css';

export default function CategoryCard({ title, image, id }) {
	return (
		<div className={s.all_categ_pict}>
			<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
			<p>{title}</p>
		</div>
	);
}

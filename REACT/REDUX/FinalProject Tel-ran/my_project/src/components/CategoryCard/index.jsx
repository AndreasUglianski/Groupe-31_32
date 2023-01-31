import React from 'react';
import s from './index.module.css'

export default function CategoryCard({ image, title }) {
  return (
		
			<div className={s.cat_picture}>
				<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
				<p>{title}</p>
			</div>
		
	);
}

import React from 'react';
import s from './index.module.css';

export default function Post({ id, title, description, delete_post }) {
	return (
		<div className={s.post_item}>
			<p onClick={() => delete_post(id)} className={s.cross_icon}>
				X
			</p>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

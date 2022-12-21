import React from 'react';
import s from './index.module.css'


export default function User({ id, name, age, country, delete_user }) {
	return (
		<div className={s.user_card} onClick={() => delete_user(id)}>
			<p className={s.cross_icon}>X</p>
			<p>Name:{name}</p>
			<p>Age: {age}</p>
			<p>Country:{country}</p>
		</div>
	);
}

import React from 'react';
import s from './index.module.css'

export default function User({ email, name, role, avatar }) {
	return (
		<div className={s.users_card}>
			<a href=' '>{email}</a>
			<p>{name}</p>
			<p>{role}</p>
			<img src={avatar} alt='avatar' />
		</div>
	);
}

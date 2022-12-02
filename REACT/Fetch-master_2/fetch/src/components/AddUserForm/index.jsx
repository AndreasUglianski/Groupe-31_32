import React from 'react';
import s from './index.module.css';
import { addUser } from '../../requests/users';
import { Context } from '../../context';
import { useContext } from 'react';

export default function AddUserForm() {
	const { createNewUser } = useContext(Context);

	const submit = (event) => {
		event.preventDefault();
		const { name, role, avatar } = event.target;
		addUser(
			{
				name: name.value,
				role: role.value,
				avatar: avatar.value,
				email: 'example@mail.com',
				password: 123,
			},
			createNewUser
		);
		name.value = '';
		role.value = '';
		avatar.value = '';
	};
	return (
		<form onSubmit={submit} className={s.add_user_form}>
			<input type='text' name='name' placeholder='name' />
			<input type='text' name='role' placeholder='role' />
			<input type='text' name='avatar' placeholder='avatar' />
			<button>Add user</button>
		</form>
	);
}

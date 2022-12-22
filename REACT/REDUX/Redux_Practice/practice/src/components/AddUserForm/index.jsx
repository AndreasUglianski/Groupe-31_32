import React from 'react';
import s from './index.module.css';
import { addUser } from '../../store/reducers/userReducer'; 
import { useDispatch } from 'react-redux';

export default function AddUserForm() {
	const dispatch = useDispatch();

	const submit = (event) => {
		event.preventDefault();
		const { name, age, country } = event.target;
		dispatch(
			addUser({
				name: name.value,
				age: age.value,
				country: country.value,
			})
		);
		name.value = '';
		age.value = '';
		country.value = '';
	};

	return (
		<form onSubmit={submit} className={s.add_user_form}>
			<input type='text' name='name' placeholder='Name' />
			<input type='text' name='age' placeholder='Age' />
			<input type='text' name='country' placeholder='Country' />
			<button>Add user</button>
		</form>
	);
}

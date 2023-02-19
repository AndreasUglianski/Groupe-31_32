import React from 'react'
import s from './index.module.css'
import { useForm } from 'react-hook-form'

export default function FormCartTelNum() {
	const { register, handleSubmit } = useForm();

	const submit = (data) => console.log(data);

	const phoneRegister = register('phone');

	return (
		<form onSubmit={handleSubmit(submit)} className={s.cart_form}>
			<input
				type='tel'
				name='phone'
				defaultValue={'+49 '}
				title='phone'
				maxLength={14}
				// pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}-[0-9]{4}'
				required
				{...phoneRegister}
			/>
			<button>Order</button>
		</form>
	);
}


import React from 'react'
import s from './index.module.css'
import { useForm } from 'react-hook-form'

export default function FormCartTelNum() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const submit = (data) => {
		console.log(data);
		reset();
	};

	const phoneRegister = register('phone', {
		required: '***The field "phone number" is requared***',
		pattern: {
			value: /^(\+49|0049|0)[1-9]\d{1,14}$/,
			message: 'Must be in the format: +49 123456789***',
		},
	});

	return (
		<form onSubmit={handleSubmit(submit)} className={s.cart_form}>
			<input
				type='tel'
				name='phone'
				// defaultValue={'+49 '}
				title='phone'
				placeholder='Enter your phone number'
				maxLength={14}
				{...phoneRegister}
			/>
			{errors?.phone && <p>{errors?.phone?.message}</p>}
			<button>Ordder</button>
		</form>
	);
}

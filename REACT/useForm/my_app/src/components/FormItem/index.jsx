import React from 'react';
import Button from '../Button';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import s from './index.module.css'
import {CloseOutlined} from '@ant-design/icons'

export default function FormItem() {
	const { register, handleSubmit } = useForm();

	const submit = (data) => console.log(data);

	const emailRegister = register('email');
	const passwordRegister = register('password');
	
	return (
		<form onSubmit={handleSubmit(submit)} className={s.form_item}>
			<CloseOutlined className={s.cross_icon} />
			<p className={s.form_title}>Registration</p>
			<Input type='text' name='email' placeholder='Email' {...emailRegister} />
			<Input
				type='password'
				name='password'
				placeholder='Password'
				{...passwordRegister}
			/>
			<p className={s.form_descr}>
				By registering on the site, you agree to our Rules and Privacy Policy
				and agree to receive newsletters
			</p>
			<Button color='yellow'>Registration</Button>
			<Button color='white'>Login</Button>
		</form>
	);
}

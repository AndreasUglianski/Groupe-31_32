import React from 'react';
import Button from '../Button';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import s from './index.module.css';
import { Link } from 'react-router-dom';


export default function FormItem({
	title,
	button,
	info_text,
	form_type,
	info_text_2,
	link_url
}) {
	const { register, handleSubmit } = useForm();

	const submit = (data) => console.log(data);

	const emailRegister = register('email');
	const passwordRegister = register('password');

	return (
		<form onSubmit={handleSubmit(submit)} className={s.form_item}>
			<p className={s.form_title}>{title}</p>

			<p className={s.form_descr}>{info_text_2}</p>

			<Input type='text' name='email' placeholder='Email' {...emailRegister} />

			{['registration', 'login'].includes(form_type) ? (
				<Input
					type='password'
					name='password'
					placeholder='Password'
					{...passwordRegister}
				/>
			) : (
				''
			)}

			<p className={s.form_descr}>{info_text}</p>
			<Button color='yellow'>{button.submit}</Button>

			{['registration', 'login'].includes(form_type) ? (
				<Link to ={link_url} style={{textDecoration: 'none'}}>
					<Button color='white'>{button.redirect}</Button>
				</Link>
			) : (
				''
			)}
		</form>
	);
}

import React from 'react';
import s from './index.module.css';
import image from './media/gnome.png';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

export default function DiscountCoupon() {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<section className={['wrapper', s.container].join(' ')}>
			<div id='coupon' className={s.image}>
				<img src={image} alt='gnome' />
			</div>
			<div className={s.info_block}>
				<h2>Discount 5%</h2>
				<p>for the first order</p>

				<form className={s.coupon_form}>
					<div className={s.input_number}>
						<Controller
							className={s.flag}
							name='phone-input'
							control={control}
							rules={{
								validate: (value) => isValidPhoneNumber(value),
							}}
							render={({ field: { onChange, value } }) => (
								<PhoneInput
									value={value}
									onChange={onChange}
									defaultCountry='DE'
									id='phone-input'
								/>
							)}
						/>
						{errors['phone-input'] && (
							<p className={s.error_message}>Invalid Phone</p>
						)}
					</div>
					<button onSubmit={handleSubmit(onSubmit)}>Get a discount</button>
				</form>
			</div>
		</section>
	);
}

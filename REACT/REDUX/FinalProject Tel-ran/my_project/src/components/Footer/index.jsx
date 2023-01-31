import React from 'react';
import s from './index.module.css';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

export default function Footer() {
	return (
		<footer className={['wrapper', s.footer].join(' ')}>
			<div className={s.contacts}>
				<h3>Contacts</h3>
				<p>+49 0000000000</p>
				<div className={s.social_network_icons}>
					<a href='https://www.instagram.com/'>
						<InstagramOutlined />
						Instagram
					</a>
					<a href='https://web.whatsapp.com/'>
						<WhatsAppOutlined />
						WhatsApp
					</a>
				</div>
			</div>
			<div className={s.address}>
				<h3>Address</h3>
				<h4>Dream, Pushkin str., 1</h4>
				<h6>operation mode:</h6>
				<h5>round the clock</h5>
			</div>
		</footer>
	);
}

import React from 'react';
import Button from '../Button';
import Nav from '../Nav';
import s from './index.module.css';
import logo from './media/logo_pic.png';
import { BsGlobe2 } from 'react-icons/bs';

export default function Header() {
	return (
		<header className={s.main_header}>
			<div>
				<Nav />
				<img src={logo} alt='logo' />
				<div className={s.info_block}>
					<p>
						Sales:
						<bp />
						+1 (800) 315-5939
					</p>
					<BsGlobe2 className={s.glob_icon} />
					<p>Serch: </p>
					<p>Log in: </p>
				</div>
				<Button>Sign up</Button>
			</div>
		</header>
	);
}

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll/modules';
import logo from './media/logo.png';
import s from './index.module.css';
import { SlHandbag } from 'react-icons/sl';
import {GrCart} from 'react-icons/gr'
import { MenuOutlined } from '@ant-design/icons';

export default function Nav({ menuActive, setMenuActive }) {
	return (
		<nav className={['wrapper', s.nav_block].join(' ')}>
			<div className={s.logo}>
				<RouterLink to='/'>
					<img src={logo} alt='logo' />
				</RouterLink>
				<ScrollLink to='catalog' smooth={true} duration={1000}>
					<button className={s.catalog}>Catalog</button>
				</ScrollLink>
			</div>

			<ul className={[s.nav_menu, menuActive ? s.active : ''].join(' ')}>
				<RouterLink to='/categories'>Categories</RouterLink>
				<ScrollLink to='coupon' smooth={true} duration={1000}>
					Coupon
				</ScrollLink>
				<ScrollLink to='promo' smooth={true} duration={1000}>
					Promotions
				</ScrollLink>
				<ScrollLink to='contacts' smooth={true} duration={1000}>
					Contacts
				</ScrollLink>
				<RouterLink to='/cart' className={s.cart}>
					<GrCart />
				</RouterLink>
			</ul>
			<MenuOutlined
				className={s.menu_icon}
				onClick={() => setMenuActive(menuActive ? false : true)}
			/>
		</nav>
	);
}

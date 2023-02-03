import React from 'react';
import { Link } from 'react-router-dom';
import logo from './media/logo.png';
import s from './index.module.css';
import { SlHandbag } from 'react-icons/sl';
import { MenuOutlined } from '@ant-design/icons';

export default function Nav({ menuActive, setMenuActive }) {
	return (
		<nav className={['wrapper', s.nav_block].join(' ')}>
			<div className={s.logo}>
				<Link to='/'>
					<img src={logo} alt='logo' />
				</Link>
				<button className={s.catalog}>Catalog</button>
			</div>

			<ul className={[s.nav_menu, menuActive ? s.active : ''].join(' ')}>
				<Link to='/categories'>Categories</Link>
				<Link to='coupon'>Coupon</Link>
				<Link to='promotions'>Promotions</Link>
				<Link to='contacts'>Contacts</Link>
				<Link to=''>
					<SlHandbag />
				</Link>
			</ul>
			<MenuOutlined
				className={s.menu_icon}
				onClick={() => setMenuActive(menuActive ? false : true)}
			/>
		</nav>
	);
}

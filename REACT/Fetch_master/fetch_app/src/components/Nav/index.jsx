import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div className={s.nav_menu}>
			<Link to='/UserPage'>Users</Link>
			<Link to='/ProductsPage'>Products</Link>
		</div>
	);
}

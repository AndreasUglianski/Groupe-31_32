import React from 'react';
import s from './index.module.css';

export default function Nav() {
	return (
		<nav className={s.nav_menu}>
			<a href='www'>Configurations</a>
			<a href='www'>Teams</a>
		</nav>
	);
}

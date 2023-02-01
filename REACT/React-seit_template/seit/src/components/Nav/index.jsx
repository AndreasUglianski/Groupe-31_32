import React from 'react'
import s from './index.module.css';

export default function Nav() {
    return (
			<nav className={s.header_nav}>
				<ul>
					<li>Products</li>
					<li>Resources</li>
					<li>Inspiration</li>
					<li>Pricing</li>
				</ul>
			</nav>
		);
}

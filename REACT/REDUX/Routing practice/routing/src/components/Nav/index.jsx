import React from 'react'
import s from './index.module.css'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
		<div className={s.nav}>
			<Link to='/'>
				<p>Main</p>
			</Link>
			<Link to='/categories'>
				<p>Categories</p>
			</Link>
		</div>
	);
}

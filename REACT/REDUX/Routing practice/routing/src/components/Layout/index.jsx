import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/index.jsx';

export default function Layout() {
	return (
		<div>
			<Nav />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

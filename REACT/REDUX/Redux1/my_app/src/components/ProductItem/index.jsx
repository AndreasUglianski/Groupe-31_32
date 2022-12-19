import React from 'react';

export default function ProductItem({ id, title, price, delete_product }) {
	return (
		<div onClick={() => delete_product(id)}>
			<p>Title: {title}</p>
			<p>Price: {price}</p>
		</div>
	);
}

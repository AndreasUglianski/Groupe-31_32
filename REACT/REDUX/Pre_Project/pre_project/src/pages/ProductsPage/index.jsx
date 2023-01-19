import React from 'react';
import { useParams } from 'react-router-dom';


export default function ProductsPage() {
	const { category } = useParams();

	const category_up = category[0].toUpperCase() + category.slice(1);

	return (
		<div>
			<p>{category_up}</p>
		</div>
	);
}

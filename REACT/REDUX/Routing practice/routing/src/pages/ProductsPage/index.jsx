import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductsPage() {
	const { category } = useParams();

	return <div>{category}</div>;
}

import React, { useState, useEffect } from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import { getCategoriesImgs } from '../../requests/categories_img';

export default function CategoryCard({ category }) {
	const category_up = category[0].toUpperCase() + category.slice(1);

	const [images, setImages] = useState([]);

	useEffect(() => {
		getCategoriesImgs(setImages, category);
	}, []);

	// console.log(images);

	return (
		<Link className={s.category_card} to={category}>
			<img src={images[0]} alt={category} />
			{category_up}
		</Link>
	);
}

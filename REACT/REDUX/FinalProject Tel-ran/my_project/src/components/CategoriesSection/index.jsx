import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryCard from '../../components/CategoryCard';
import { load_categories } from '../../requests/categories_req';
import { Link } from 'react-router-dom';
import s from './index.module.css';

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(load_categories);
  }, []);

	

  return (
		<section className={['wrapper', s.categories_section].join(' ')}>
			<div className={s.categories_subheader}>
				<h2>Categories</h2>
				<Link to='/categories'>
					<button>all categories</button>
				</Link>
			</div>
			<div className={s.cat_card}>
				{categories.slice(0,-1).map((el, index) => (
					<CategoryCard key={index} {...el} />
				))}
			</div>
		</section>
	);
}
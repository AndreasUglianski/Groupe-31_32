import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { all_Products } from '../../requests/products_req';
import ProductsCard from '../../components/ProductsCard';
import s from './index.module.css';
import { useParams } from 'react-router-dom';



export default function ProductsPage() {
	const dispatch = useDispatch();

	const { id } = useParams();
	
	const products = useSelector((state) => state.allProducts);
	const products_category = useSelector((state) => state.categories);

	

	useEffect(() => {
		dispatch(all_Products(id))
		
	}, [dispatch, id]);

	console.log(products);

	return (
		<section className={['wrapper', s.products_category].join(' ')}>
			<div>
				{products_category.map((el) => {
					if (el.id === +id) {
						return <h2 key={el.id}>{el.title}</h2>;
					}
				})}
			</div>

			<div className={s.sort}>
				<div>
					<form className={s.form_price}>
						<span>Price</span>
						<input type='number' placeholder='from' name='min' />
						<input type='number' placeholder='to' name='max' />
					</form>
				</div>

				<div>
					<form className={s.check_box}>
						<span>Discounted items</span>
						<input type='checkbox' />
					</form>
				</div>

				<div>
					<form className={s.sorting}>
						<span>Sorted</span>
						<select className={s.sort_select}>
							<option value='default'>by default</option>
							<option value='title'>by title</option>
							<option value='price'>by price</option>
						</select>
					</form>
				</div>
			</div>

			<div className={s.products}>
				{products.length && products.map((el) => (
					<ProductsCard key={el.id} {...el} />
				))}
			</div>
		</section>
	);
}

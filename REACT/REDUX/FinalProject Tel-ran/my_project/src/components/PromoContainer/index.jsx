import {React, useEffect} from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import PromoItem from '../PromoItem'
import { randomPromotionProducts } from '../../store/reducers/random_promotion';



export default function PromoContainer() {

	const dispatch = useDispatch();
	const promotions = useSelector((state) => state.randomPromotions);

	useEffect(() => {
		dispatch(randomPromotionProducts);
	}, []);
	
	return <section>
		{
			promotions.map((el) => <PromoItem key={el.id} {...el} />)
		}
	</section>;
}

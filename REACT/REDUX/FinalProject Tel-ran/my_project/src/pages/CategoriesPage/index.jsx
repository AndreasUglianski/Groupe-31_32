import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryCard from '../../components/CategoryCard';
import { load_categories } from '../../requests/categories_req';
// import s from './index.module.css';

export default function CategoriesPage() {
	const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);

    useEffect(() => { 
        dispatch(load_categories)
    }, []);
    
    console.log(categories)
	
    return <div>
        {
            categories.map((el,index) => <CategoryCard key={index} {...el} />)
        }
    </div>;
}

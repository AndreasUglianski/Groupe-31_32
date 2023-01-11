import React, { useState, useEffect } from 'react';
import CategoryCard from '../../components/CategoryCard';
import { getCategories } from '../../requests/categories';

export default function CategoriesPage() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories(setCategories);
    }, []);    
    
    

    return (
			<div>
				{categories.map((el, index) => (
                    <CategoryCard key={index} category={ el} />
				))}
			</div>
		);
}

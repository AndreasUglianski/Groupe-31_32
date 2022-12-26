import React, { useEffect, useState } from 'react';
import CategoryCard from '../../components/CategoryCard';
import { getCategories } from '../../reqests/categories';
import s from './index.module.css'

export default function CategoriesPage() {


  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories(setCategories);
  }, [])

  

  return (
    <div className={s.categories_page}>
      {
        categories.length === 0
          ? <p>Categories are loading...</p>
          : <div>
        {
          categories.map((el) => (
            <CategoryCard key={el} category={el} />
          ))
        }
			    </div>
      }
		</div>
	);
}

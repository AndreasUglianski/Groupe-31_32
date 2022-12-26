import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../reqests/products';
import s from './index.module.css'

export default function ProductsPage() {
	const [products, setProducts] = useState([]);

	const { category } = useParams();

    useEffect(() => {
        getProducts(category, setProducts);
    }, [])
    
    console.log(products);

    return <div className={s.products_page}>
        {
            products.map(el => <ProductCard key={ el.id} {...el} />)
        }
    </div>;
}

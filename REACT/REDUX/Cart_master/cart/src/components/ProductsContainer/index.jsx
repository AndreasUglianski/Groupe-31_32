import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard';

export default function ProductsContainer() {

    const products = useSelector(state => state.products)
   

    return <div>
        {
            products.map(el => <ProductCard key={el.id} {...el} />)
        }
    </div>;
}

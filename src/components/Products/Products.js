import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const products = JSON.parse(useLoaderData());
    console.log(products)
    return (
        <div>
            <div className='products'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;
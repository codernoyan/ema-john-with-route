import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
const Product = ({ product }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/product/${product.id}`)
    }
    return (
        <div className='card'>
            <div className='product-img'>
                <img src={product.img} alt="product" />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <h4><code>Price:{product.price}</code></h4>
                <p>Seller: {product.seller}</p>
            </div>
            <button onClick={handleNavigate}>Show Details</button>
        </div>
    );
};

export default Product;
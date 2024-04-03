// ProductDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
    const { productId } = useParams();

    // Hardcoded product data
    const product = {
        "productName": "Laptop 1",
        "price": 2236,
        "rating": 4.7,
        "discount": 63,
        "availability": "yes"
    };

    return (
        <div>
            <h1>Product Details</h1>
            <p>Name: {product.name}</p>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability ? 'Available' : 'Out of stock'}</p>
        </div>
    );
}

export default ProductDetailsPage;

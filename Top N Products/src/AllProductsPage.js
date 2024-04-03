// AllProductsPage.js
import React from 'react';
import ProductList from '../components/ProductList';
import FilterOptions from '../components/FilterOptions';
import Pagination from '../components/Pagination';

function AllProductsPage() {
  // Hardcoded product data
  const products = [
    { 
        "productName": "Laptop 1",
        "price": 2236,
        "rating": 4.7,
        "discount": 63,
        "availability": "yes"
    },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>All Products</h1>
      <FilterOptions />
      <ProductList products={products} />
      <Pagination />
    </div>
  );
}

export default AllProductsPage;

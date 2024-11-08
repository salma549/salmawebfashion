import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Category({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on category
    axios.get(`http://localhost:5000/api/products?category=${category}`)
      .then(response => {
        // Filter products by category in case the API returns mixed data
        const filteredProducts = response.data.filter(product => product.category === category);
        setProducts(filteredProducts);
      })
      .catch(error => console.log(error));
  }, [category]);

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">{category.charAt(0).toUpperCase() + category.slice(1)} Dresses</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map(product => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <div className="border p-4">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <h2 className="text-xl">{product.name}</h2>
              <p>{product.price} USD</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Men component for displaying men's clothing
export function Men() {
  return <Category category="men" />;
}

// src/Components/ProductList.tsx
import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  // any other fields from your JSON
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}; // <-- only close here

export default ProductList;
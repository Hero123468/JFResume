// src/Components/ProductList.tsx
import React, { useState, useEffect } from 'react';
//import { Product } from '../types/Product';

const ProductList: React.FC = () => {
    interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    link: string;
    }
  
  const [products, setProducts] = useState<Product[]>([])

  console.log("This is ", products);

  useEffect(() => {
    fetch('http://local host:3000/products')
 .then(res => res.json())
  .then((data: Product[]) => {
    setProducts(data);          // now you have typed JS objects
    console.log("Products is from useState",data);
  })
  .catch(err => console.error(err));

  }, []);

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          <h3>{p.title}</h3>
          <img src={p.image} alt={p.title} width={100} />
          <p>💲{p.price}</p>
          <a href={p.link}>Buy Now</a>
        </li>
      ))}
    </ul>
  );
};

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
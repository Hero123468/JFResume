import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/Components/ProductList.tsx
import React, { useState, useEffect } from 'react';
//import { Product } from '../types/Product';
const ProductList = () => {
    const [products, setProducts] = useState([]);
    console.log("This is ", products);
    useEffect(() => {
        fetch('http://local host:3000/products')
            .then(res => res.json())
            .then((data) => {
            setProducts(data); // now you have typed JS objects
            console.log("Products is from useState", data);
        })
            .catch(err => console.error(err));
    }, []);
    const ProductList = () => {
        const [products, setProducts] = useState([]);
        useEffect(() => {
            fetch('/products.json')
                .then(res => res.json())
                .then((data) => setProducts(data))
                .catch(err => console.error('Error fetching products:', err));
        }, []);
        return (_jsx("ul", { children: products.map(p => (_jsxs("li", { children: [_jsx("h3", { children: p.title }), _jsx("img", { src: p.image, alt: p.title, width: 100 }), _jsxs("p", { children: ["\uD83D\uDCB2", p.price] }), _jsx("a", { href: p.link, children: "Buy Now" })] }, p.id))) }));
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Product List" }), _jsx("ul", { children: products.map(product => (_jsx("li", { children: product.name }, product.id))) })] }));
}; // <-- only close here
export default ProductList;

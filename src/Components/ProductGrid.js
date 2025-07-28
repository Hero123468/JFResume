import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { products } from "../Data/products";
import { ProductCard } from "../Components/ProductCard";
export const ProductGrid = () => {
    return (_jsx("div", { style: {
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
            padding: "24px",
        }, children: products.map((product) => (_jsx(ProductCard, { product: product }, product.id))) }));
};

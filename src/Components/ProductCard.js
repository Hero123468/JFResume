import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
export const ProductCard = ({ product }) => {
    return (_jsxs("a", { href: product.link, target: "_blank", rel: "noopener noreferrer", style: {
            textDecoration: "none",
            color: "inherit",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "16px",
            width: "260px",
            transition: "transform 0.2s ease",
        }, onMouseEnter: (e) => (e.currentTarget.style.transform = "scale(1.02)"), onMouseLeave: (e) => (e.currentTarget.style.transform = "scale(1)"), children: [_jsx("img", { src: product.image, alt: product.title, style: {
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    marginBottom: "12px",
                } }), _jsx("h3", { style: { fontSize: "1rem", marginBottom: "8px" }, children: product.title }), _jsxs("p", { style: { fontWeight: "bold", fontSize: "0.9rem" }, children: ["$", product.price.toFixed(2)] })] }));
};

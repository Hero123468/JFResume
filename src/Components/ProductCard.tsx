import React from "react";
import type { Product } from "../Data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "inherit",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        width: "260px",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "4px",
          marginBottom: "12px",
        }}
      />
      <h3 style={{ fontSize: "1rem", marginBottom: "8px" }}>{product.title}</h3>
      <p style={{ fontWeight: "bold", fontSize: "0.9rem" }}>${product.price.toFixed(2)}</p>
    </a>
  );
};

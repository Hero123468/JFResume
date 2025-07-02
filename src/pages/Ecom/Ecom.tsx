import React from "react";
import { ProductGrid } from "../../Components/ProductGrid";

const Ecom: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "24px", fontFamily: "sans-serif" }}>
        🛍️ Soylent Store
      </h1>
      <ProductGrid />
    </div>
  );
};

export default Ecom;

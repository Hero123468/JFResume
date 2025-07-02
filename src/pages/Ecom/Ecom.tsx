import { products } from "../data/products";

export const ProductGrid = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", padding: "20px" }}>
      {products.map(product => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%" }} />
          <h2>{product.name}</h2>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

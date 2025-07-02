import type React from "react";

export const ProductGrid: React.FC = () => {
    return (
        <div>
        style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
            padding: "24px"          
        }}
        </div> 
    )
}
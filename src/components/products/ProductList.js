const ProductList = ({ products, onEdit, onDelete }) => {
  if (products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "4px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            padding: "1rem",
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h4 style={{ margin: 0 }}>{product.name}</h4>
            <p style={{ margin: 0, color: "#666" }}>
              ${product.price} • {product.stock} in stock • {product.category}
            </p>
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={() => onEdit(product)}
              style={{
                padding: "0.25rem 0.5rem",
                background: "#ffc107",
                color: "black",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product.id)}
              style={{
                padding: "0.25rem 0.5rem",
                background: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

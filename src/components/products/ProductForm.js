import React, { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, initialData, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        price: initialData.price,
        stock: initialData.stock,
        category: initialData.category,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
    });
    setFormData({ name: "", price: "", stock: "", category: "" });
  };

  const handleCancel = () => {
    setFormData({ name: "", price: "", stock: "", category: "" });
    onCancel();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#f8f9fa",
        padding: "1rem",
        borderRadius: "4px",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "80%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
          style={{ width: "80%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
          min="0"
          style={{ width: "80%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          style={{ width: "90%", padding: "0.5rem", marginTop: "0.25rem" }}
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {initialData ? "Update Product" : "Add Product"}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={handleCancel}
            style={{
              padding: "0.5rem 1rem",
              background: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;

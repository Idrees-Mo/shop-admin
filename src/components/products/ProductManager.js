import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

const ProductManager = () => {
  const { products, loading, addProduct, updateProduct, deleteProduct } =
    useProducts();

  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleFormSubmit = (productData) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
      setEditingProduct(null);
    } else {
      addProduct(productData);
    }
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h2>Product Management</h2>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem" }}
      >
        {/* Form Section */}
        <div>
          <h3>{editingProduct ? "Edit Product" : "Add New Product"}</h3>
          <ProductForm
            onSubmit={handleFormSubmit}
            initialData={editingProduct}
            onCancel={editingProduct ? handleCancelEdit : null}
          />
        </div>

        {/* List Section */}
        <div>
          <h3>Products ({products.length})</h3>
          <ProductList
            products={products}
            onEdit={handleEdit}
            onDelete={deleteProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductManager;

import { useState, useEffect } from "react";

// Mock data
const initialProducts = [
  { id: 1, name: "Laptop", price: 999, stock: 15, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 699, stock: 30, category: "Electronics" },
  { id: 3, name: "Desk Chair", price: 199, stock: 10, category: "Furniture" },
];

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error] = useState(null);

  // Simulate API call
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(initialProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(), // Simple ID generation
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};

export default useProducts;

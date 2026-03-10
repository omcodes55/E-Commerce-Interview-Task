import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productApi";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-xl md:text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Products;
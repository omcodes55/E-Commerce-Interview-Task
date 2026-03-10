import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(product);
    toast.success("Added to cart 🛒");
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 transition">

      <img
        src={product.image}
        className="h-40 mx-auto object-contain"
      />

      <h3 className="text-sm mt-3 font-semibold">
        {product.title}
      </h3>

      <p className="text-lg font-bold mt-1 text-blue-600">
        ${product.price}
      </p>

      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white w-full mt-3 p-2 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;
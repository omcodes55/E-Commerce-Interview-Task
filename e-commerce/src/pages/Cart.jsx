import { useContext } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, increaseQty, decreaseQty, totalPrice } =
    useContext(CartContext);

  return (
    <DashboardLayout>
      <h1 className="text-xl md:text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-500 text-sm md:text-base">
          Your cart is empty
        </p>
      )}

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Product info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                className="h-14 w-14 md:h-16 md:w-16 object-contain"
              />

              <div>
                <h3 className="font-semibold text-sm md:text-base">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">${item.price}</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
              >
                -
              </button>

              <span className="font-medium">{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-8 bg-white shadow rounded-xl p-4 md:p-5 flex justify-between items-center">
        <h2 className="text-base md:text-lg font-semibold">Total</h2>

        <h2 className="text-lg md:text-xl font-bold text-blue-600">
          ${totalPrice.toFixed(2)}
        </h2>
      </div>
    </DashboardLayout>
  );
};

export default Cart;
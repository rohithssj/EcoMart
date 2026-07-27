import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cartStore.cart);

  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(deleteCart(id));
  };

  const increase = (id) => {
    dispatch(increaseQty(id));
  };

  const decrease = (id) => {
    dispatch(decreaseQty(id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-5">

          <h1 className="text-3xl font-bold">
            Shopping Cart ({totalItems})
          </h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-2xl shadow p-12 text-center">
              <h2 className="text-2xl font-semibold">
                Your cart is empty 🛒
              </h2>

              <p className="text-gray-500 mt-2">
                Add some products to continue shopping.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow p-5 flex gap-5"
              >

                {/* Image */}
                <div className="w-36 h-36 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="h-28 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">

                  <div>
                    <h2 className="text-xl font-semibold line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 mt-2 capitalize">
                      {item.category}
                    </p>

                    <p className="text-green-600 text-2xl font-bold mt-3">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5">

                    {/* Quantity */}
                    <div className="flex items-center border rounded-lg overflow-hidden">

                      <button
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => decrease(item.id)}
                      >
                        -
                      </button>

                      <span className="px-5">
                        {item.qty}
                      </span>

                      <button
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => increase(item.id)}
                      >
                        +
                      </button>

                    </div>

                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>
            ))
          )}

        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit sticky top-8">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-green-600">
                Free
              </span>
            </div>

            <hr />

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

          </div>

          <button className="w-full mt-8 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Cart;
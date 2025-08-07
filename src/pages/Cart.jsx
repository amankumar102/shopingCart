import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((sum, curr) => sum + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">
                  Shopping Cart ({cart.length} items)
                </h2>
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <CartItem key={item.id} item={item} itemIndex={index} />
                  ))}
                </div>
              </div>
            </div>

            {/* Cart Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <div className="border-b pb-4 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Your Cart</h3>
                  <p className="text-sm text-gray-600 mt-1">Summary</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Total items:</span>
                    <span className="font-semibold text-gray-900">{cart.length}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
                      <span className="text-2xl font-bold text-green-600">${totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-md">
                  Checkout Now
                </button>

                {/* Additional Info */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Free shipping on orders over $50
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart Section */
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <div className="mb-6">
                <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0h9" />
                </svg>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              
              <Link to="/">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105 shadow-md">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
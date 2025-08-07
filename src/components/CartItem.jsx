import React from 'react';
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
    }

    return (
        <div className="w-full">
            <div className='flex flex-col md:flex-row gap-6 px-4 md:px-10 py-6'>

                {/* Image */}
                <div className='w-full md:w-[150px] h-[180px] mx-auto md:mx-0'>
                    <img
                        src={
                            import.meta.env.MODE === "development"
                                ? item.image.replace("https://fakestoreapi.com", "")
                                : item.image
                        }
                        alt="img"
                        className='h-full w-full'
                    />
                </div>

                {/* Text and Price Section */}
                <div className='flex-1'>
                    <h1 className='text-gray-700 font-semibold text-lg mb-3'>
                        {item.title}
                    </h1>
                    <p className="text-sm text-gray-600">
                        {item.description.split(" ").slice(0, 20).join(" ") + " ..."}
                    </p>

                    <div className='flex justify-between items-center mt-5'>
                        <p className='font-bold text-green-600 text-lg'>${item.price}</p>
                        <div className='bg-red-200 p-1 rounded-full cursor-pointer'>
                            <FcDeleteDatabase className='size-5'
                                onClick={removeFromCart}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal line */}
            <hr className="mx-4 md:mx-10 border-t border-gray-700 border-[1px] my-4" />
        </div>
    );
}

export default CartItem;

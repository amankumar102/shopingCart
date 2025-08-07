import { HiShoppingCart } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { useSelector } from "react-redux";

function Navbar() {
    const { cart } = useSelector((state) => state);
    return (
        <div>
            <nav className='flex justify-between items-center h-15 max-w-6xl mx-auto'>
                <NavLink to="/">
                    <div className='ml-5' >
                        <img className='h-10 w-30 rounded' src={Logo} alt="logo" />
                    </div>
                </NavLink>

                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                        <div className="relative">
                            <HiShoppingCart className="text-2xl" />
                            {
                                cart.length > 0 &&
                                <span
                                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 flex 
                                    justify-center items-center animate-bounce rounded-full text-white "
                                > {cart.length} </span>
                            }
                        </div>


                    </NavLink>

                </div>
            </nav>
        </div>
    )
}

export default Navbar

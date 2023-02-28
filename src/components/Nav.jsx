import {SiShopify} from "react-icons/si"
import {FaSearch} from "react-icons/fa"
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
import useStateContext from "../context/StateContext.jsx";
import {useState} from "react";
const Nav = ()=>{
    const {search,setSearch,state:{cart}} = useStateContext();
    const handleChange = (e)=>{
        setSearch(e.target.value)
    }
    return (
        <nav className='flex items-center flex-wrap justify-between py-3 px-2 bg-gray-50 shadow-md rounded my-2 lg:my-4'>
            <Link to='/' className='flex items-center mb-3 md:mb-0'>
                <SiShopify className='text-4xl mr-1 text-cyan-900'/>
                <span className='font-semibold text-xl text-header'>MMSIT-Shop</span>
            </Link>
            <div className='flex gap-5 items-center justify-between md:justify-center w-full md:w-2/4'>
                <Link to='/cart'>
                    <div className='flex items-center gap-2 bg-header px-3 py-2 rounded text-white'>
                        <FaShoppingCart/>
                        <span>{cart.length}</span>
                    </div>
                </Link>
                <div className="flex items-center w-full">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaSearch/>
                        </div>
                        <input
                                value={search}
                                onChange={handleChange}
                                type="text" id="simple-search"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search"/>
                    </div>
                </div>
            </div>

        </nav>
    )
}
export default Nav
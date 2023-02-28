import {AiFillDelete, AiFillMinusSquare, AiFillPlusSquare} from "react-icons/ai";
import useStateContext from "../context/StateContext.jsx";
import {useState} from "react";

const CartItems = ({c,incPrice,decPrice}) => {
    const {state:{cart},dispatch} = useStateContext();
    const [qty,setQty]= useState(1);
    const [total,setTotal] = useState(0)
    const removeCart =()=>{
        dispatch({type:"REMOVE_FROM_CART",payload:c})
        decPrice(c.price * qty)
    }
    const incQty = ()=>{
        setQty(prevState => prevState + 1)
        incPrice(c.price)
    }
    const decQty = ()=>{
       if (qty>1){
           setQty(prevState => prevState - 1)
           decPrice(c.price)
       }
    }
  return (
      <div key={c.id} className='flex items-center justify-between my-2 '>
          <div className='flex justify-center items-center'>
              <img className="w-6 h-9 md:w-16 rounded object-contain" src={c.image}
                   alt="Large avatar"/>
                  <button type="button" onClick={removeCart}
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                      <AiFillDelete className='text-xl pointer-events-none ' />
                  </button>

          </div>
          <div className='flex items-center justify-end w-3/4'>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button type="button" onClick={decQty}
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                      <AiFillMinusSquare className='text-xl'/>
                  </button>
                  <p className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200'>{qty}</p>
                  <button type="button" onClick={incQty}
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                      <AiFillPlusSquare className='text-xl'/>
                  </button>
              </div>
          </div>
      </div>
  )
}
export default CartItems
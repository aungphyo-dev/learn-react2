import {AiTwotoneStar} from 'react-icons/ai'
import {Link, useParams} from "react-router-dom";
import useStateContext from "../context/StateContext.jsx";

const Card = ({product})=>{
    const {dispatch} = useStateContext();
    return (
        <div className='w-full md:w-72'>
            <div
                className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/details/${product.id}`} className='w-full'>
                    <img className="p-8 rounded-t-lg w-full h-72 object-contain" src={product?.image} alt="product image"/>
                </Link>
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white md:truncate">{product?.title}</h5>
                    <div className="flex items-center mt-2.5 mb-5">
                        <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                        <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                        <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                        <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                        <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                        <span
                            className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.rating.rate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-header dark:text-white">${product?.price}</span>
                        <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})}
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                            to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card
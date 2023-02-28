import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetData} from "../api/Api.js";
import {AiTwotoneStar} from "react-icons/ai";
import Card from "../components/Card.jsx";
import useStateContext from "../context/StateContext.jsx";

const Details = ()=>{
    const {id} = useParams()
    const [product,setProduct]=useState({});
    const [categoryItems,setCategoryItems] = useState([]);
    const {dispatch} = useStateContext()
    const getProductDetail = async ()=>{
        setProduct(await GetData(`/products/${id}`))
    }
    const getProductByCategory = async ()=>{
        const data = await GetData(`/products/category/${product.category}`)
        const filterData = data?.filter((filterItem)=>product.id!==filterItem.id);
        setCategoryItems(filterData)
        console.log(filterData)
    }
    useEffect(()=>{
        getProductDetail();
    },[])
    useEffect(()=>{
        getProductByCategory();
    },[product,categoryItems])
    return(
        <div>
            <div
                className="flex flex-col items-center w-full  bg-white border border-gray-200  rounded-none lg:rounded-lg shadow md:flex-row   dark:border-gray-700 dark:bg-gray-800">
                <img className="object-contain p-3 w-96 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                     src={product?.image} alt="..."/>
                <div className="flex flex-col justify-between px-4 py-2 leading-normal">
                    <div className='flex items-center justify-between'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product?.title}</h5>
                        <p className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>${product?.price}</p>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 tracking-wider">{product?.description}</p>
                    <div className='flex flex-wrap items-center'>
                        <div className='flex items-center mr-3 flex-wrap'>
                            <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mr-3 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                                to cart</button>
                            <Link to='/success'
                                className="text-header transition-all duration-500 hover:text-white border border-blue-700 hover:bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Buy Now</Link>
                        </div>
                        <div className="text-header font-medium uppercase text-sm  py-2.5 mr-3">Category : {product?.category}</div>
                        <div className="flex items-center py-2.5">
                            <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                            <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                            <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                            <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                            <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                            <span
                                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product?.rating?.rate}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <h1 className='text-xl font-bold'>You may also like :</h1>
                <div className='flex justify-center items-center gap-5 flex-wrap px-2 md:px-0 mt-5'>
                    {categoryItems?.map((product)=>(
                        <div className='w-full md:w-72' key={product.id}>
                            <div
                                className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="p-8 rounded-t-lg w-full h-72 object-contain" src={product?.image} alt="product image"/>
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white md:truncate">{product?.title}</h5>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-header dark:text-white">${product?.price}</span>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                                            <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                                            <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                                            <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                                            <AiTwotoneStar className={`text-yellow-300 text-xl`}/>
                                            <span
                                                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.rating.rate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

)
}
export  default Details
import useStateContext from "../context/StateContext.jsx";
import Card from "../components/Card.jsx";
import {useEffect, useState} from "react";
import Loading from "../components/spinner/Loading.jsx";


const Products = ()=>{
    const {state : {products,cart} , search} = useStateContext();
    const [isloading,setIsLoading]=useState(true);
    useEffect(()=>{
        setIsLoading(false)
    },[products])
    return (
        <>
            {isloading ? <Loading/> :(
                <div className='flex items-center justify-center gap-5 flex-wrap px-2 md:px-0'>
                    {products?.map((product)=><Card key={product.id} product={product}/>)}
                </div>
            )}
        </>
    )
}
export default Products
import useStateContext from "../context/StateContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import CartItems from "./CartItems.jsx";

const Cart = ()=>{
    const {state:{cart},dispatch} = useStateContext();
    const nav = useNavigate();
    const [total,setTotal]= useState(0)
    useEffect(()=>{
        setTotal(cart?.reduce((pv,cv)=>pv+cv.price,0))
    },[])
    const chekoutHandler = () => {
        dispatch({type:"EMPTY_CART"});
        nav('/success')
        }
    const incPrice = (price)=>{
        setTotal(total + price)
    }
    const decPrice = (price)=>{
        setTotal(total - price)
    }
    return (
        <>
            {cart.length>0 ?(
                <div className='px-2 min-h-[calc(100vh-100px)] flex flex-col'>
                    <div className='w-full'>
                        {cart?.map((c)=> (
                            <CartItems key={c.id} c={c} incPrice={incPrice} decPrice={decPrice}/>
                        ))}
                    </div>
                    <div className="flex justify-between items-center py-5 mt-auto">
                        <button onClick={()=> dispatch({type:"EMPTY_CART"})} className='bg-red-500 text-white px-3 py-2 rounded'>Remove All Items</button>
                        <div className='flex flex-col gap-2 items-center mt-auto'>
                            <h1 className='text-xl font-bold'>Total price : {total.toFixed(2)}</h1>
                            <button  onClick={chekoutHandler} className='bg-blue-500 text-white px-3 py-2 rounded'>Checked out</button>
                        </div>
                    </div>
                </div>
            ) : <div className='min-h-[calc(100vh-100px)] flex justify-center items-center text-center flex-col gap-5'>
                <h1 className='text-red-700'>Your cart is empty</h1>
                <button onClick={()=> nav('/')} className='bg-red-500 px-3 py-2 rounded text-white '>Go Shopping</button>
            </div>}
        </>
    )
}

export default Cart
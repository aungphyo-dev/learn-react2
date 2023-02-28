import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {GetData} from "../api/Api.js";
import cart from "../components/Cart.jsx";

export const StateContext = createContext();
export const StateContextProvider = ({children})=>{
    const [productList,setProductList] = useState([])
    const [search,setSearch] = useState("");
    const initialState = {
        products : [],
        cart : []
    }
    const reducer = (state,action) =>{
        switch (action.type){
            case "GET_PRODUCTS" :
                return {...state ,products:action.payload};
            case "ADD_TO_CART" :
                const item = action.payload;
                const isExisted = state.cart.find(c=>c.id === item.id )
                if(isExisted){
                    return {
                        ...state,cart:state.cart.map(c=>c.id===item.id ? {...item} : {...c})
                    }
                }else {
                    return {
                        ...state,cart:[...state.cart, {...item}]
                    }
                }
                // return {...state,cart:[...state.cart,{...action.payload,qty : 1}]}
            case "REMOVE_FROM_CART" :
                return {...state,cart: state.cart.filter((item)=>item.id!==action.payload.id)}
            case "EMPTY_CART" :
                return {...state,cart:state.cart = []}
            default :
                return state
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState)
    const getData = async ()=>{
        const data = await GetData('/products');
        setProductList(data)
    }
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        dispatch({type:"GET_PRODUCTS",payload:productList});
        const FilterData = productList?.filter((product)=> product.title.toLowerCase().includes(search.toLowerCase()))
        dispatch({type:"GET_PRODUCTS",payload:FilterData});
    },[productList,search])

    const data = {state,search,setSearch,dispatch};

    return (
        <>
            <StateContext.Provider value={data}>
                {children}
            </StateContext.Provider>
        </>
    )
};
const useStateContext = ()=> useContext(StateContext)
export default useStateContext

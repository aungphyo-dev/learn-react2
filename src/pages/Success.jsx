import {Link} from "react-router-dom";

const Success = ()=>{
    return (
        <div className='animate__animated animate__backInDown'>
            <div className='h-[calc(100vh-100px)] flex justify-center items-center flex-col tracking-wide'>
                <h1 className='text-4xl font-bold mb-2 text-center'>Thanks For Purchasing</h1>
                <Link to='/' className='bg-red-500 px-3 py-2 rounded text-center transation-colors duration-500 hover:bg-red-700 text-white uppercase'>Go to shopping</Link>
            </div>
        </div>
    )
}
export default Success
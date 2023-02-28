import './index.css'
import {Route, Routes} from "react-router-dom";
import Products from "./pages/Products.jsx";
import Nav from "./components/Nav.jsx";
import Details from "./pages/Details.jsx";
import Cart from "./components/Cart.jsx";
import Success from "./pages/Success.jsx";
import 'animate.css'

const App = ()=>{
    return (
        <div className='container mx-auto'>
            <Nav/>
            <Routes>
                <Route path='/' element={<Products/>}/>
                <Route  path='/details/:id' element={<Details/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/success' element={<Success/>}/>
            </Routes>
        </div>
    )
}
export default App
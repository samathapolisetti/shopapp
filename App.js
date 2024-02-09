import React from 'react';
import './App.css';
import { useRef} from 'react';
import Navbar from './components/navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Shop from './pages/shop';
import ShopCategory from './pages/shopcategory';
import Cart from './pages/Cart';
function App() {
  const myRef = useRef();
  console.log("hello");
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<shop/>}/>
    
    <Route path='/Mens' element={<ShopCategory category="Mens"/>}/>
    <Route path='/Womens' element={<ShopCategory category="Womens"/>}/>
    <Route path='/Kids' element={<ShopCategory category="Kids"/>}/>
    <Route path="/product" element={<product/>}>
    <Route path=':productId' element={<product/>}></Route>
    </Route>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/login' element={<loginsignup/>}/>
    <Route path='/Cart' element={<Cart/>}/>

    </Routes>
    </BrowserRouter>

  </div>
  );
}
export default App;

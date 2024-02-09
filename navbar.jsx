import React, { useState } from 'react';
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
    const Navbar =() => {
        // eslint-disable-next-line no-undef
        const [menu,setmenu] = useState("shop");
    return ( 
    <div>
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPAPP</p>
            </div>
        <ul className="nav-menu">
            <li onClick={()=>{setmenu("Shop")}}><Link to='/'>Shop</Link>Shop{menu==="Shop"?<h/>:<></>}</li>
            <li onClick={()=>{setmenu("Mens")}}><Link to='/mens'>Men</Link>{menu==="Mens"?<h/>:<></>}</li>
            <li onClick={()=>{setmenu("Womens")}}><Link to='/womens'>Womens</Link>{menu==="Womens"?<h/>:<></>}</li>
            <li onClick={()=>{setmenu("Kids")}}><Link to='/kids'>Kids</Link>{menu==="Kids"?<h/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <link to='login'><button>Login</button></link>
            <link to='cart_icon'><img src={cart_icon} alt="" /></link> 
            <div className="nav-cart-login">0</div>
        </div>
        </div>
    </div>
    )
    }
    export default Navbar
    
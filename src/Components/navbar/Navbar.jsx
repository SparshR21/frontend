// import React from 'react'
import React, { useContext, useRef, useState } from 'react';
import './navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown.png'
const Navbar = () => {
    const [menu,setMenu] = useState("Shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
  return (
    <div className='Navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
        </div>
        <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration: 'none'}} to='/Men'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration: 'none'}} to='Women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration: 'none'}} to='/Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// icons

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

// others

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {

const [scrolled,setScrolled]=useState(false)
const [showCart,setShowCart]=useState(false)
const [showSearch,setShowSearch]=useState(false)
const {cartCount}=useContext(Context)
const navigate=useNavigate();
// for header to show after some scroll amount 
const handleScroll=()=>{
    const offset=window.scrollY;
    // to see amound of scroll
    console.log(offset) 
    if (offset > 400){
        setScrolled(true);
        
    }
    else{
        setScrolled(false);
        
    }  
console.log(scrolled) 
}

useEffect(()=>{
window.addEventListener('scroll',handleScroll);
},[])


  return (
    <>
    <header>
      <div className={`main-header  ${scrolled? 'sticky-header' : ''}`}>
      {/* <div className= "main-header sticky-header" > */}
        <div className="header-content">
          <ul className="left" >
            <li onClick={()=>navigate('/')} >Home</li>
            <li onClick={()=>navigate('/about')} >About</li>
            <li onClick={()=>navigate('/categories')}>Categories</li>
          </ul>
          <div className="center"><span onClick={()=>navigate('/')} >Labayik E.Store</span></div>
          <div className="right">
            <TbSearch onClick={()=>{setShowSearch(true)}} />
            <AiOutlineHeart/>
            <span className="cart-icon" onClick={()=>{setShowCart(true)}}> <CgShoppingCart/> {!!cartCount &&<span>{cartCount}</span>} </span> 
          </div>
        </div>
      </div>
    </header>
    {showCart&&<Cart setShowCart={setShowCart} />}
    {showSearch &&<Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;

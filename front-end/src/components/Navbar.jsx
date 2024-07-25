import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import './Navbar.css'
import{Link} from 'react-router-dom'
import { Storecontext } from '../context/Storecontext'
const Navbar = ({sshowLogin}) => {
  const[menu,smenu]=useState("Home");
  const{getTotalCartAmount}=useContext(Storecontext);
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>smenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#exploremenu' onClick={()=>smenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>smenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>smenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":'dot'}></div>
        </div>
        <button onClick={()=>sshowLogin(true)}>Sign in / Login</button>
      </div>
    </div>
  )
}

export default Navbar

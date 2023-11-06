import React from 'react'
import { useSelector} from 'react-redux';
import './navbar.css'
function Navbar() {
  const no = useSelector((state)=>state.cart.cartItems.length)
  return (
    <div>
      <nav className='navbar' >
        <div className='logo'>Shopeezy🛒</div>
        <p className='links' >
        Items in cart: {no}
        <br />
    
        </p>
      </nav>
    </div>
  )
}

export default Navbar;
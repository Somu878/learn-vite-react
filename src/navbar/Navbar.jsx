import React from 'react'
import { useSelector} from 'react-redux';
import './navbar.css'
function Navbar() {
  const no = useSelector((state)=>state.cart.cartItems.length)
  const cost = useSelector((state)=>state.cart.totalCost)
  return (
    <navbar>
      <nav className='navbar' >
        <p className='links' >
        Items in cart: {no}
        <br />
        Total Cost: {cost}$ 
        </p>
      </nav>
    </navbar>
  )
}

export default Navbar;
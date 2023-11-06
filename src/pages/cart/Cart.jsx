import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);
    return (
        <div className='cart'>
            <div>
                <h1>Your items in cart</h1>
            </div>
            <div className='cartitems'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} data ={item} />
                ))}
            </div>
            
        </div>
    );
}

export default Cart;

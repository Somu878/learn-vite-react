import React from 'react'
import { addItem} from '../../redux/Cart'
import { useSelector, useDispatch} from 'react-redux';
function Product(props) {
    const {thumbnail,title,price,description} = props.data
    const items = useSelector((state)=>state.cart.cartItems)
    const dispatch = useDispatch()
  return (
    <>
   <div className='product'>
    <img src={thumbnail} alt="" />
    <div className='description'></div>
    <p>
        <b>{title}</b>
    </p>
    <p id='d'>{description}</p>
    <p>{price}💲</p>
    <button className='addToCartBttn ' onClick={()=>{
      dispatch(addItem(props.data))}}>Add to Cart</button>
   </div>
  
   </>
  )
}

export default Product
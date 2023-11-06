import React from "react";
import { removeItem } from "../../redux/Cart";
import { useDispatch, useSelector} from "react-redux";
function CartItem(props) {
  const { thumbnail, title, price, description,id } = props.data;
  const CartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <>
      <div className="product">
        <img src={thumbnail} alt="" />
        <div className="description"></div>
        <p>
          <b>{title}</b>
        </p>
        <p id="d">{description}</p>
        <p>{price}💲</p>
        <button className="addToCartBttn" onClick={()=>{
            dispatch(removeItem(id))
            console.log(CartItems);
        }} >Remove from cart</button>
      </div>
    </>
  );
}

export default CartItem;

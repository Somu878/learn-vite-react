import React from 'react'
import products from '../../data.json'
import Product from './product'
import './shop.css'
function Shop() {
  return (
    <div className='Shop'>
        <div className='shoptitle'>
            Shopeezy🛒
        </div>
        <div className='products'>
            {products.products.map((item)=>(
                <Product key={item.id} data = {item}/>
            ))}
        </div>
    </div>
  )
}
export default Shop
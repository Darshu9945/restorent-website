import React from 'react'
import './cart.css'
import { BsCartFill} from "react-icons/bs";

const Cart = () => {
  return (
    <div>
       <div className='forcart'>
            <span className='icon'><BsCartFill/>  </span>
            <span className='cartname'> Your cart</span>
            <span className='cartnumber'>0</span>
              
        </div>
      
    </div>
  )
}

export default Cart

import React from 'react'
import classes from'./headercart.module.css'
import { BsCartFill} from "react-icons/bs";

const Cart = () => {
  return (
    <div>
       <div className={classes.forcart}>
            <span className={classes.icon}><BsCartFill/>  </span>
            <span className={classes.cartname}> Your cart</span>
            <span className={classes.cartnumber}>0</span>
              
        </div>
      
    </div>
  )
}

export default Cart

import React from 'react'
import classes from'./headercart.module.css'
import { BsCartFill} from "react-icons/bs";
import { useContext } from 'react';
import Contextdata from '../../Contextapi/Creatcontext';


const Cart = (props) => {
  const ctx=useContext(Contextdata)
  return (
    <div>
       <div className={classes.forcart} onClick={props.onClick}>
            <span className={classes.icon}><BsCartFill/>  </span>
            <span className={classes.cartname}> Your cart</span>
            <span className={classes.cartnumber}>{ctx.item.length}</span>    
        </div>
      
    </div>
  )
}

export default Cart

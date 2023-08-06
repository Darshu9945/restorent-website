import React from 'react'
import classes from'./headercart.module.css'
import { BsCartFill} from "react-icons/bs";
import { useContext } from 'react';
import Contextdata from '../../Contextapi/Creatcontext';


const Cart = (props) => {
  const ctx=useContext(Contextdata)
  let cartamont=0
  console.log(ctx.item,"cart")
  ctx.item.map((item)=>{
    cartamont=cartamont+item.amount1.L+item.amount1.M+item.amount1.S
  })
  return (
    <div>
       <div className={classes.forcart} onClick={props.onClick}>
            <span className={classes.icon}><BsCartFill/>  </span>
            <span className={classes.cartname}> Your cart</span>
            <span className={classes.cartnumber}>{cartamont}</span>    
        </div>
      
    </div>
  )
}

export default Cart

import React, { useContext } from 'react'
import classes from'./mealitem.module.css'
import Mealform from '../Mealform'
import Contextdata from '../../../Contextapi/Creatcontext'
const Mealitem = (props) => {
  const ctx=useContext(Contextdata)
  const onAddrefhandler=(amount)=>{
    ctx.additem({
      id:props.id,
      name:props.item.name,
      amount:amount,
      price:props.item.price
    })

  }
  console.log(props.item)
  return (
    <div className={classes.main}>
       <div className={classes.meals}>
            <h3> {props.item.name}</h3>
            <p>{props.item.description}</p>
            <p className={classes.col}> ${props.item.price}</p>
        </div>
            <div>
               <Mealform onAddref={onAddrefhandler}
               count={props.item.amount}></Mealform>
            </div>
       
    </div>
  )
}

export default Mealitem

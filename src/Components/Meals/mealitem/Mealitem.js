import React from 'react'
import classes from'./mealitem.module.css'
import Mealform from '../Mealform'
const Mealitem = (props) => {
  return (
    <div className={classes.main}>
       <div className={classes.meals}>
            <h3> {props.item.name}</h3>
            <p>{props.item.description}</p>
            <p className={classes.col}> ${props.item.price}</p>
        </div>
            <div>
               <Mealform></Mealform>
            </div>
       
    </div>
  )
}

export default Mealitem

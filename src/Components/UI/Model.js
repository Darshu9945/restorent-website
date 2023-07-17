import React from 'react'
import classes from './model.module.css'
import  ReactDOM  from 'react-dom'
 const Backdrop=(props)=>{
    return <div className={classes.Backdrop} onClick={props.OnClose}> </div>
 }
 const Mealcartoverlay=(props)=>{
  return (
    <div>{props.children}</div>
  )
 }

const Model = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop OnClose={props.onClick}></Backdrop>,document.getElementById('overlay'))}
      {ReactDOM.createPortal(<Mealcartoverlay >{props.children}</Mealcartoverlay>,document.getElementById('overlay'))}
    </div>
  )
}

export default Model

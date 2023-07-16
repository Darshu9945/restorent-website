import React from 'react'
import classes from './model.module.css'
import  ReactDOM  from 'react-dom'
 const Backdrop=(props)=>{
    return <div className={classes.Backdrop}> {props.children}</div>
 }

const Model = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop>{props.children}</Backdrop>,document.getElementById('overlay'))}
    </div>
  )
}

export default Model

import React from 'react'
import classes from"./input.module.css"
const Input = (props) => {
    console.log(props.input.label)
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.input.label}</label>
      <input {...props.input} />
    </div>
  )
}
export default Input

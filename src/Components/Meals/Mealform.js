import React from 'react'
import Input from '../UI/Input'
import classes from'./mealform.module.css'
const Mealform = () => {
  return (
    <div>
      <Input input={
        {
            id:"amount",
            label:"Amount",
            type:"number",
            max:4,
            min:1
        }
      }></Input>
      <button className={classes.button}> +  Add</button>
    </div>
  )
}

export default Mealform

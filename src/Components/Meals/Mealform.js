import React,{useRef} from 'react'
import Input from '../UI/Input'
import classes from'./mealform.module.css'

const Mealform = (props) => {
 const updateamountref=useRef()
 const submithandler=(event)=>{
  event.preventDefault()
  console.log(updateamountref)
    const updatedamount=updateamountref.current.value
     const  updatedamountnumber=+updatedamount
   props.onAddref(updatedamountnumber)
 }
 
  return (
    <div>
      <form onSubmit={submithandler}>
      <Input 
      ref={updateamountref}
      input={
        {
            id:"amount",
            label:"Amount",
            type:"number",
            max:4,
            min:1,
            count:1,
            defaultValue:1
        }
      }></Input>
      <button type='submit' className={classes.button}> +  Add</button>
      </form>
    </div>
  )
}

export default Mealform

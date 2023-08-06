import React,{useContext, useRef, useState} from 'react'
import Input from '../UI/Input'
import classes from'./mealform.module.css'
import Contextdata from '../../Contextapi/Creatcontext'

const Mealform = (props) => {
  const ctx=useContext(Contextdata)
  const [count,setcount]=useState(props.count)
 const updateamountref=useRef()
 const submithandler=(event)=>{
  event.preventDefault()
  setcount((pre)=>pre-1)
    const updatedamount=updateamountref.current.value
     const  updatedamountnumber=1
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
            label:"Quantity",
            type:"number",
            count:1,
            value:count
        }
      }></Input>
      <button type='submit' className={classes.button}> Add to cart</button>
      </form>
    </div>
  )
}

export default Mealform

import React, { useContext, useState } from 'react'
import classes from './summary.module.css'
import Contextdata from '../../Contextapi/Creatcontext'
const Summary = () => {
const [medicinename,setmedicinename]=useState('')
const [description,setdescription]=useState('')
const [price,setprice]=useState(0)
const [cout,setcount]=useState(null)
const ctx=useContext(Contextdata)
const medicinehandler=(e)=>{
setmedicinename(e.target.value)
}
const descriptionhandler=(e)=>{
  setdescription(e.target.value)
}
const pricehandler=(e)=>{
  setprice(e.target.value)
}
const availablehandler=(e)=>{
  setcount(e.target.value)
}


  const getmedicinehandler=(e)=>{
     e.preventDefault()
     const product={
      name:medicinename,
      description:description,
      price:price,
      amount:cout
     }
     ctx.adddata(product)
     console.log(ctx.product);
  }

  return (
    <form onSubmit={getmedicinehandler}>
        <div className={classes.forsummary}>
              <div className={classes.forinput}>
                <label>madicine</label><br></br>
                <input type="text" onChange={medicinehandler} />
              </div>
              <div className={classes.forinput}>
                <label>description</label><br></br>
                <input type="text" onChange={descriptionhandler}/>
              </div>
              <div className={classes.forinput}>
                <label>price</label><br></br>
                <input type="number" onChange={pricehandler}/>
              </div>
              <div className={classes.forinput}>
                <label>avialable</label><br></br>
                <input type="number" onChange={availablehandler}/>
              </div>
              <div className={classes.forbutton}>
                <button type='submit'>Add to product</button>
                </div>
        </div>
        </form>
  )
}

export default Summary

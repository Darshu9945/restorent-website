import React, { useContext, useEffect, useState } from 'react'
import classes from './summary.module.css'
import Contextdata from '../../Contextapi/Creatcontext'
const Summary = () => {
  const [medicinename, setmedicinename] = useState('')
  const [description, setdescription] = useState('')
  const [price, setprice] = useState(null)
  const [count, setcount] = useState({})
  const ctx = useContext(Contextdata)
  const medicinehandler = (e) => {
    setmedicinename(e.target.value)


  }
  const descriptionhandler = (e) => {
    setdescription(e.target.value)

  }
  const pricehandler = (e) => {
    setprice(e.target.value)
  }
  const availablehandler = (e) => {
   const name=e.target.name
 
    const namevalue=e.target.value
    setcount({...count,[name]:namevalue})
  }
  
  const getmedicinehandler = (e) => {
    e.preventDefault()
    const product = {
      name: medicinename,
      description: description,
      price: price,
      amount: count
    }
    ctx.adddata(product)

    setmedicinename('')
    setdescription('')
    setcount({
      L:"",M:"",S:""
    })
    setprice('')
  }

  return (
    <form onSubmit={getmedicinehandler}>
      <div className={classes.forsummary}>
        <div className={classes.forinput}>
          <label>Tshirt name</label><br></br>
          <input type="text" value={medicinename} onChange={medicinehandler} />
        </div>
        <div className={classes.forinput}>
          <label>description</label><br></br>
          <input type="text" value={description} onChange={descriptionhandler} />
        </div>
        <div className={classes.forinput}>
          <label>price</label><br></br>
          <input type="number" value={price} onChange={pricehandler} />
        </div>

        <div className={classes.forinput}>
          <div className={classes.size}>
            <div>
              <label>L</label>
              <input type="number" name='L' value={count.L} onChange={availablehandler} />
            </div>
            <div>
              <label>M</label>
              <input type="number" name='M' value={count.M} onChange={availablehandler} />
            </div>
            <div>
              <label>S</label>
              <input type="number" name='S' value={count.S} onChange={availablehandler} />
            </div>

          </div>
        </div>
        <div className={classes.forbutton}>
          <button type='submit'>Add to product</button>
        </div>
      </div>
    </form>
  )
}

export default Summary

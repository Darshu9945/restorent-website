import React, { useContext } from 'react'
import classes from'./mealitem.module.css'
import Mealform from '../Mealform'
import Contextdata from '../../../Contextapi/Creatcontext'
import axios from 'axios'
const Mealitem = (props) => {
  const ctx=useContext(Contextdata)
 
  
  
  const sizehandlerL=()=>{
    ctx.additem({...props.item,amount1:{L:1,M:0,S:0}},"L")
    console.log(props.item,"items")
    axios.put(`https://for-tshirt-website-default-rtdb.firebaseio.com/products/${props.item.key}.json`,{...props.item,amount:{...props.item.amount,L:props.item.amount.L-1}})
    .then(res=>console.log(res)
    ).catch(err=>console.log(err.message))
  }
  
  const sizehandlerM=()=>{
    ctx.additem({...props.item,amount1:{L:0,M:1,S:0}},"M")
    axios.put(`https://for-tshirt-website-default-rtdb.firebaseio.com/products/${props.item.key}.json`,{...props.item,amount:{...props.item.amount,M:props.item.amount.M-1}})
    .then(res=>console.log(res)
    ).catch(err=>console.log(err.message))
  }
  
  const sizehandlerS=()=>{
    ctx.additem({...props.item,amount1:{L:0,M:0,S:1}},"S")
    axios.put(`https://for-tshirt-website-default-rtdb.firebaseio.com/products/${props.item.key}.json`,{...props.item,amount:{...props.item.amount,S:props.item.amount.S-1}})
    .then(res=>console.log(res)
    ).catch(err=>console.log(err.message))
  }
  console.log(ctx.item,"kb")
  return (
    <div className={classes.main}>
            <section style={{flexBasis:"13rem"}}>
            <h2 > {props.item.name}</h2>
            </section>
            <section style={{flexBasis:"8rem"}}>
            <p >{props.item.description}</p>
            </section>
            <section style={{flexBasis:"3rem"}}>
            <p  className={classes.col}> ${props.item.price}</p>
            </section>
            <div  className={classes.mealform}>
              
            <button onClick={sizehandlerL} className={classes.button}> {`buy large (${props.item.amount.L})`}</button>
            <button onClick={sizehandlerM} className={classes.button}> {`buy large(${props.item.amount.M})`}</button>
            <button onClick={sizehandlerS} className={classes.button}> {`buy large(${props.item.amount.S})`}</button>
            </div>
</div>
  )
}

export default Mealitem

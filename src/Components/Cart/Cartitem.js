import React from 'react'

import classes from'./cartitem.module.css'
import Model from '../UI/Model'
import { useContext } from 'react'
import Contextdata from '../../Contextapi/Creatcontext'
const Cartitem = (props) => {
    const ctx=useContext(Contextdata)

   

        const setamout=ctx.item.length>0


     
  return (
    <div >
        <Model onClick={props.onClose}>
        <div className={classes.cartdata} >
        {ctx.item.map((item)=>{
                return( 
                   < React.Fragment>
                <div className={classes.cartitem1} key={item.id}>
                    <section>
                     <p  value={item.name} className={classes.name}>
                          {item.name}
                      </p>
                      <span  className={classes.price}>{` $ ${item.price.toFixed(2)}`}</span>
                      <span className={classes.count}>x{item.amount}</span>
                    </section>
                    <section>
                        <button onClick={()=>{
                            ctx.additem({...item,amount:1})
                        }}>+</button>
                        <button onClick={()=>{
                            ctx.removeitem(item)
                        }}>-</button>
                    </section>
               </div>
           </React.Fragment>
               )
            })
        } </div>
        <header className={classes.matter}>
                    <h2>Total Amount</h2>
                    <h2>{ctx.Totalamount.toFixed(2)}</h2>
                </header>
         <div className={classes.button}>
               <button onClick={props.onClose}>Close</button>
               {setamout && <button>Order</button>}
           </div>
           </Model>
    </div>
   
  )
}

export default Cartitem

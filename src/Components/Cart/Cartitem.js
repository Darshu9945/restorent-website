import React, { useState } from 'react'

import classes from'./cartitem.module.css'
import Model from '../UI/Model'
import { useContext } from 'react'
import Contextdata from '../../Contextapi/Creatcontext'
const Cartitem = (props) => {
    const ctx=useContext(Contextdata)
    const[order,setorder]=useState(false)

   

        const setamout=ctx.item.length>0

const orderhandler=()=>{
setorder(true)
}
     
  return (
    <div >
       <Model onClick={props.onClose}>
        <div className={classes.cartdata} >
        {ctx.item.map((item)=>{
            console.log(item)
                return( 
                   < React.Fragment>
                <div className={classes.cartitem1} key={item.id}>
                    <section className={classes.info}>
                    <section style={{width:"8rem"}}>
                     <p>{item.name}</p>
                     </section>
                     <section>
                     <span>L</span> <p>{item.amount1.L}</p>
                     </section>
                     <section> <span>M</span> <p>{item.amount1.M}</p></section>
                     <section> <span>S</span> <p>{item.amount1.S}</p></section>
                     
                    </section>
                    <section>{item.price}</section>
                    {/* <section>
                        <button onClick={()=>{
                            ctx.additem({...item,amount:1})
                        }}>+</button>
                        <button onClick={()=>{
                            ctx.removeitem(item)
                        }}>-</button>
                    </section> */}
               </div>
           </React.Fragment>
               )
            })
        } 
        
        </div>
        <header className={classes.matter}>
                    <h2>Total Amount</h2>
                    <h2>{ctx.Totalamount}</h2>
                </header>
         <div className={classes.button}>
               <button onClick={props.onClose}>Close</button>
               {setamout && <button onClick={orderhandler}>Order</button>}
           </div>
           
           </Model>
           
    </div>
   
  )
}

export default Cartitem

import React from 'react'
import classes from'./cartitem.module.css'
import Model from '../UI/Model'
const Cartitem = (props) => {
    const cartitem =[{
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
      }]
  return (
    <Model onClick={props.onClose}>
    <div className={classes.cartitem}>
        {cartitem.map((item)=>{
                return( 
                <div className={classes.name}>
                {item.name}
                <header className={classes.matter}>
                    <h2>Total Amount</h2>
                    <h2>{item.price}</h2>
                </header>
                <div className={classes.button}>
                    <button onClick={props.onClose}>Close</button>
                    <button>Order</button>
                </div>
               </div>
               )
            })
        }
    </div>
    </Model>
  )
}

export default Cartitem

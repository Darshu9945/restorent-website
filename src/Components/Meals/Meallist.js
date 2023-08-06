import React, { useContext, useEffect } from 'react'
import classes from './meallist.module.css'
import Mealitem from './mealitem/Mealitem';
import Contextdata from '../../Contextapi/Creatcontext';
const DUMMY_MEALS = [

    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
const Meallist = () => {
  const ctx=useContext(Contextdata)
  return (
    <div className={classes.meallist}>
      {ctx.product.map((item,index)=>{
        return <Mealitem
        key={item.price}
        item={{...item,index:index}}></Mealitem>
      })}
    </div>
  )
}

export default Meallist

import React from 'react'
import classes from './header.module.css'
import Cart from './HeaderCart'
import Summary from '../Meals/Summary'
import Meallist from '../Meals/Meallist'
const Header = () => {
  return (
    <header className={classes.header}>
        <div className={classes.forhead}>
           <h1>rectmeals</h1>
           <Cart></Cart>
        </div>
        <div className={classes.image}>
        <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg" alt="gallery" />
        </div>
        <Summary></Summary>
        <Meallist></Meallist>
    </header>
  )
}

export default Header

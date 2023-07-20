import React from 'react'
import classes from './header.module.css'
import mealsImage from '../../assets/meals.jpg';
import Cart from './HeaderCart'
import Summary from '../Meals/Summary'
import Meallist from '../Meals/Meallist'
const Header = (props) => {
  return (
    <header className={classes.header}>
        <div className={classes.forhead}>
           <h1>Pharmahub</h1>
           <Cart onClick={props.onOpen} ></Cart>
        </div>
        <div className={classes.image}>
        <img src="https://avante.biz/wp-content/uploads/Pharmacy-wallpaper-HD/Pharmacy-wallpaper-HD34.jpg" alt="gallery" />
        </div>
    </header>
  )
}

export default Header

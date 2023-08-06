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
           <h1>Tshirts</h1>
           <Cart onClick={props.onOpen} ></Cart>
        </div>
        <div className={classes.image}>
        <img src="https://image.freepik.com/free-photo/top-view-color-t-shirt-grey-wood-plank-background_30478-1351.jpg" alt="gallery" />
        </div>
    </header>
  )
}

export default Header

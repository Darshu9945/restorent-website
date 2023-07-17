import React, { useState } from 'react';
import classes from './App.module.css';
import Header from './Components/header/header';
import Cartitem from './Components/Cart/Cartitem';
import Summary from './Components/Meals/Summary';
import Meallist from './Components/Meals/Meallist';


function App() {
  const[cartshow,setcartshow]=useState(false)
 const cartshowhandler=()=>{
  setcartshow(true)
 }
 const cartclosehandler=()=>{
  setcartshow(false)
 }
  return (<React.Fragment>
    {cartshow && <Cartitem onClose={cartclosehandler}/>}
    <div className={classes.App}>
    <Header onOpen={cartshowhandler}/>
    <Summary></Summary>
    <Meallist></Meallist>
    </div>
    
    </React.Fragment>
  )
}

export default App;

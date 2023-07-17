import React, { useState } from 'react';
import classes from './App.module.css';
import Header from './Components/header/header';
import Cartitem from './Components/Cart/Cartitem';
import Summary from './Components/Meals/Summary';
import Meallist from './Components/Meals/Meallist';
import {Creatcontext} from './Contextapi/Creatcontext';


function App() {
  const[cartshow,setcartshow]=useState(false)
 const cartshowhandler=()=>{
  setcartshow(true)
 }
 const cartclosehandler=()=>{
  setcartshow(false)
 }
  return (<React.Fragment>
    <Creatcontext>
    {cartshow && <Cartitem onClose={cartclosehandler}/>}
    <div className={classes.App}>
    <Header onOpen={cartshowhandler}/>
    <Summary></Summary>
    <Meallist></Meallist>
    </div>
    </Creatcontext>
    </React.Fragment>
  )
}

export default App;

import React from 'react';
import classes from './App.module.css';
import Header from './Components/header/header';
import Cartitem from './Components/Cart/Cartitem';



function App() {
  return (<React.Fragment>
    <Cartitem></Cartitem>
    <div className={classes.App}>
    <Header/>
    </div>
    </React.Fragment>
  )
}

export default App;

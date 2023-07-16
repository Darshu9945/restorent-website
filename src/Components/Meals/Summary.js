import React from 'react'
import classes from './summary.module.css'
const Summary = () => {
  return (
    <React.Fragment>
        <div className={classes.forsummary}>
            <h1>Delicious Food,Deliver To You</h1>
            <p>Choose your fevorite meal from our board 
                selection of aveilable meal and
                 enjoy a delicious lunch or dinner at home</p>
                 <p>All our meal are cooked with high quality incredients,
                    just-in-time and course by experience chefs!</p>
        </div>
    </React.Fragment>
  )
}

export default Summary

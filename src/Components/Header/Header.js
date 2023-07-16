import React from 'react'
import './header.css'
import Cart from '../layout/Cart'
import Summary from './Summary'
const Header = () => {
  return (
    <div className='bagroundimage'>
    <header className='header'>
        <div className='forhead'>
           <h1>rectmeals</h1>
           <Cart></Cart>
        </div>
        <div className='image'>
        <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg" alt="gallery" />
        </div>
        <Summary></Summary>
    </header>
    </div>
  )
}

export default Header

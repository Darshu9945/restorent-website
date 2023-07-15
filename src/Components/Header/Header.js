import React from 'react'
import './header.css'
import Cart from '../layout/Cart'
const Header = () => {
  return (
    <div className='bagroundimage'>
    <nav className='header'>
        <div className='forhead'>
<h2>rectmeals</h2>
        </div>
        <div className='cart'>
        <Cart></Cart>
        </div>
      
    </nav>
    </div>
  )
}

export default Header

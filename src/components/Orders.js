import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/Amazon-logo.png'

const Orders = () => {
  return (
  <>
      <Link to='/' className='goback'>
      <img src={logo} alt='no-logo' style={{width:'150px' , height:'50px'}} />
    </Link>
      <div className='order'>
        Congratulations!  you have bought a sweet items 
      </div>
  </>
  )
}

export default Orders
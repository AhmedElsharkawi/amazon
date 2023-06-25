import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/GlobalContext'
import CheckoutProduct from '../CheckoutProduct'

import StripeContainer from './StripeContainer'


const CheckoutPayment = () => {
  const {basket , user} = useAuth()

  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          checkout (<Link to="/cart" > {basket.length} items</Link>)
        </h1>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment-address'>
            <p>{user?.email}</p>
            <p>Copenhagen,Denmark</p>
          </div>
        </div>


        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment-items'>
           {basket.map((item)=>(
            <CheckoutProduct key={item.id} 
            id={item.id}
                    price={item.price}
                     title={item.title} 
                     image={item.image} />
            
           ))}
          </div>
        </div>

     
<StripeContainer />






      </div>
    </div>
  )
}

export default CheckoutPayment
import React from 'react'
import cartImg from "../Images/checkoutAd.jpg"
import { useAuth } from './Context/GlobalContext'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
const Cart = () => {
    const{user,basket}= useAuth()
  return (
    <div className='cart d-flex justify-content-between  '>

        <div className='cart-left'>
            <img className='cartImg' src={cartImg} alt='cart-img'   />
            <h5>Hello, {user?.email}</h5>
            <h2>Your Shopping Basket</h2>

            {basket.length > 0 ? (
              basket.map((item)=>{
                return  <CheckoutProduct 
                  key={item.id}
                   id={item.id}
                    price={item.price}
                     title={item.title} 
                     image={item.image} />
               } )) : (<p className='text-center'>you have no items in your basket. To buy one or more items you need to go to the Homepage and add whatever you would like to buy.</p>) }
              
        </div>

        <div className='cart-right'>
        <Subtotal />
        </div>
    </div>
  )
}

export default Cart
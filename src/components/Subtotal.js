import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useAuth } from './Context/GlobalContext'
import { getBasketTotal } from './Context/AppReducer'
import { useNavigate } from 'react-router-dom'
const Subtotal = () => {
    const {basket}= useAuth();
    const navigate= useNavigate();

 
  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value)=>(
            <p>
                Subtotal({basket.length} items): 
                <strong>{value}</strong>
            </p>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={'$'} />
        
        <small>
            <input type='checkbox'  />  this order contains a gift.
            <button onClick={()=>navigate('/payment')}>
            Proceed to checkout payment
        </button>
        </small>
      
    </div>
  )
}

export default Subtotal
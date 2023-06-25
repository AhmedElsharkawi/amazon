import React from 'react'
import { CardElement , useElements , useStripe } from '@stripe/react-stripe-js'
import axios from "axios"
import { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../Context/AppReducer'
import { useAuth } from '../Context/GlobalContext'
import {  useNavigate } from 'react-router-dom'

const PaymentForm = () => {
    const navigate = useNavigate();
    const {basket , dispatch} = useAuth()
    const [success , setSuccess] = useState(false);
    const [disabled , setDisabled] = useState(false);
    const [processing , setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();



    const handleChange = ( e)=> {
        setDisabled(e.empty)
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setProcessing(true);
       


        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card:elements.getElement(CardElement)


        })
        if(!error){
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment",{
                    amount:(getBasketTotal(basket) * 100 ),
                    id
                })


                if(response.data.success){
                    console.log("successful payment");
                    setSuccess(true);
                    navigate("/orders",{replace:true})
                    dispatch({ type: "EMPTY_THE_WHOLE_BASKET" });
                }
                
            } catch (error) {
                console.log("Error",error)
                
            }
        }else{
            console.log(error.message)
        }

  
    }
  return (
    <>
{ !success ?

<div className='payment-section'>
          <h3>Payment Method</h3>
        <div className='payment-details'>
            <form onSubmit={handleSubmit}>
              
            <div className='payment-priceContainer'>

                <CardElement   onChange={handleChange}/>
            <CurrencyFormat renderText={(value)=>(
            <h3>Order Total : {value}</h3>
          
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={'$'} />
            <button type="submit" disabled={disabled || processing}>
                  {processing ? (
                    <span>Processing...</span>
                  ) : (
                    <span>Buy Now</span>
                  )}
                </button>
            </div>
          
            </form>
        </div>
        
        </div>


// <form onSubmit={handleSubmit}>
// <fieldset className='formGroup'>
//     <div className='formRow'>
//         <CardElement  />
//     </div>

// </fieldset>

// <button>Pay</button>

// </form>
:
<div>
    <h2>you just bought a sweet items , congrats</h2>
</div>
}

    </>
  )
}

export default PaymentForm
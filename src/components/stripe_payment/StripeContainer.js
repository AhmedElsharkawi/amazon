import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51NLZxRKh3GfKdQ6FwYPi1CvUReZQTyfjg2hx6Uh4dWccFMhHbtVxUDgiLaanhAGvBi9XoiNU4BRDZy5O9VDKyyQ700A4LNxj7R"
const stripeTestPromise = loadStripe(PUBLIC_KEY)
const StripeContainer = () => {
  return (

    

    <Elements stripe={stripeTestPromise}>
        <PaymentForm />

    </Elements>
  )
}

export default StripeContainer
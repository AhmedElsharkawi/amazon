import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useAuth } from './Context/GlobalContext'

const CheckoutProduct = ({id,image,price, title}) => {
    const {dispatch} = useAuth();
    const RemoveFromBasket =()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }

    

  return (
    <div className='checkout-product   d-flex ' >
        <img className='checkout-product-img' src={image} alt='img'  />
        <div>
            <p> {title}</p>
           <div>
            <small>$</small>
            <strong>{price}</strong>
           </div>
               <div>
                 <AiFillStar className='star-icon'/>
                 <AiFillStar className='star-icon'/>
                 <AiFillStar className='star-icon'/>
                 <AiFillStar className='star-icon'/>
                 <AiFillStar className='star-icon'/> 
               </div>

             <button className='remove-btn' onClick={RemoveFromBasket}>Remove From Basket</button>
          
            <p>
         
            </p>
          
            
        </div>
       
    </div>
  )
}

export default CheckoutProduct
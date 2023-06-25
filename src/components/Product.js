import React from 'react'
import {AiFillStar} from "react-icons/ai"
import { useAuth } from './Context/GlobalContext'



const Product = ({title, image,price,id}) => {
const {dispatch , basket }= useAuth();
const addToBasket = (id)=>{
dispatch({
    type:"ADD_TO_BASKET",
    item:{
        id:id,
        title:title,
        image:image,
        price:price,
    }
})
}

console.log(basket)
  return (
    <div className='product'>
        <div className='product-container'>
            <h7>{title}</h7>
          
            <p>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <p>
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>
            </p>
            <div className='d-flex justify-content-center'>
                <img className='product-img' src={image}  alt='productImg' />
            </div>
            <button className='basket-btn' onClick={addToBasket}>Add To Basket</button>
        </div>
    </div>
  )
}

export default Product
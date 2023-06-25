import React from 'react'
import homeImg from "../Images/home.jpg"
import Product from './Product'
import productImg1 from "../Images/products/1.png"
import productImg2 from "../Images/products/2.png"
import productImg3 from "../Images/products/3.png"
import productImg4 from "../Images/products/camera.jpeg"
import productImg5 from "../Images/products/5.png"
import productImg6 from "../Images/products/iphone14.jpeg"
import productImg7 from "../Images/products/iphone.jpeg"
import shortid from 'shortid'

const Home = () => {
  return (
    <div className='home'>
        <div>
            <img className='homeImg' src={homeImg} alt='home-img'  />
        </div>
        <div className='d-flex justify-content-center product-second    '>
            <Product
            title="Razer Kraken Tournament Edition THX 7.1 Surround Gaming Headset: Retractable Noise Cancelling Mic- USB DAC For PC, PS4, PS5, Nintendo Switch, Xbox Series X & S,Mobile:Black" 
            price={65}
            image={productImg1}
            id={shortid.generate()}
            />

            <Product
            title="Razer Kraken Tournament Edition THX 7.1 Surround Gaming Headset: Retractable Noise Cancelling Mic- USB DAC For PC, PS4, PS5, Nintendo Switch, Xbox Series X & S,Mobile:Black" 
            price={165}
            image={productImg2}
            id={shortid.generate()}
            />
        </div>

        
        
        <div className='d-flex justify-content-center  product-second '>
            <Product
            title="Razer Kraken Tournament Edition THX 7.1 Surround Gaming Headset: Retractable Noise Cancelling Mic- USB DAC For PC, PS4, PS5, Nintendo Switch, Xbox Series X & S,Mobile:Black" 
            price={140}
            image={productImg3}
            id={shortid.generate()}
            />

<Product
            title="Razer Kraken Tournament Edition THX 7.1 Surround Gaming Headset: Retractable Noise Cancelling Mic- USB DAC For PC, PS4, PS5, Nintendo Switch, Xbox Series X & S,Mobile:Black" 
            price={195}
            image={productImg4}
            id={shortid.generate()}
            />

<Product
            title="Razer Kraken Tournament Edition THX 7.1 Surround Gaming Headset: Retractable Noise Cancelling Mic- USB DAC For PC, PS4, PS5, Nintendo Switch, Xbox Series X & S,Mobile:Black" 
            price={225}
            image={productImg5}
            id={shortid.generate()}
            />


        </div>

        <div className='d-flex justify-content-center product-second    '>
            <Product
            title="Razer Kraken Tournament Edition THX 7.1 Surround Gaming Headset: Retractable Noise Cancelling Mic- USB DAC For PC, PS4, PS5, Nintendo Switch, Xbox Series X & S,Mobile:Black" 
            price={600}
            image={productImg6}
            id={shortid.generate()}
            />

            <Product
            title="Razer Kraken Tournament Edition THX 7.1 Surround Gaming Headset: Retractable Noise Cancelling Mic- USB DAC For PC, PS4, PS5, Nintendo Switch, Xbox Series X & S,Mobile:Black" 
            price={565}
            image={productImg7}
            id={shortid.generate()}
            />
        </div>

    </div>
  )
}

export default Home
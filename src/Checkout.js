import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct.js'
import { useStateValue } from './StateProvider.js'


export default function Checkout() {    
    const [{basket,user}]=useStateValue();

    return (
        <div className="checkout">

            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/AugART/devices_PC._SL1280_FMjpg_.jpg" alt="Banner"/>

                <div>
                    <h3>Hello {user?user.email:'Guest'}</h3>
                    <h1 className="checkout_title">Your Shopping Basket</h1>
                   
                    {
                        basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}/>
                        ))
                    }
                    
                </div>

            </div>

            <div className="checkout_right">
                <Subtotal/>

            </div>
            
        </div>
    )
}

import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket }] = useStateValue();


  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://picsum.photos/id/153/1180/120" alt="checkout" className="checkout__ad" />

        {basket?.lenght === 0 ? (
          <div>
            <h2>Your Basket is empty</h2>
            <p> Your Basket is empty please "something our go to checkout"</p>
          </div>
        ) : (
            <div>
              <h2 className="checkout__title">Your Shopping Basket</h2>


              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}


                />
              ))}



            </div>
          )}
      </div>
      {basket.length > 0 && (

        <div className="checkout__right">
          <Subtotal />
        </div>

      )}
    </div>
  );
}

export default Checkout

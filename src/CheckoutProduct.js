import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();


  const removeFromBasket = () => {

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })


  }




  return (
    <div className="checkoutProduct">

      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checckoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutproduct__rating">
          {
            Array(rating)
              .fill()
              .map((_,) => (
                <p><span aria-labelledby="emoji for ratings" role="img">⭐</span></p>
              ))
          }
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>

    </div>
  )
}

export default CheckoutProduct

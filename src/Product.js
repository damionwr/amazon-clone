import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating, description }) {

  const [{ basket }, dispatch] = useStateValue();


  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        description: description,
        image: image,
        price: price,
        rating: rating
      }
    })
  };


  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <h5>{title}</h5>
        <p>{description}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating)
              .fill()
              .map((_,) => (
                <p><span aria-labelledby="emoji for ratings" role="img">⭐</span></p>
              ))
          }
        </div>
      </div>

      <button onClick={addToBasket}>See Details</button>
    </div>
  );
}

export default Product

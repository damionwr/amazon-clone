import React from 'react'
import './Menutwo.css'
import {
  Link
} from "react-router-dom";
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';


function Menutwo() {
  return (

    <nav className="menuTwo" >
      <div className="Location__nav">
        <Link to="/login" className="menuTwo__link" >
          <div className="menuTwo__option">
            <div className="menuTwo__checkoutBasket">
              <LocationOnSharpIcon />
              <span className="menuTwo__optionLineOne">Deliver To</span>
            </div>
            <div className="location__address">
              <span className="menuTwo__optionLineTwo">jamaica</span>
            </div>
          </div>
        </Link>
      </div>
      {/*Search link */}

      {/*Login link */}
      <div className="menuTwoNav">
        <Link to="/login" className="menuTwo__link">
          <div className="menuTwo__option">

            <span className="menuTwo__optionLineOne">Today's Deals</span>
          </div>
        </Link>

        {/*Return link */}

        <Link to="/" className="menuTwo__link">
          <div className="menuTwo__option">
            <span className="menuTwo__optionLineOne">Customer Service</span>
          </div>
        </Link>

        {/*Prime link */}

        <Link to="/" className="menuTwo__link">
          <div className="menuTwo__option">
            <span className="menuTwo__optionLineOne">Gift Cards</span>
          </div>
        </Link>
        <Link to="/" className="menuTwo__link">
          <div className="menuTwo__option">
            <span className="menuTwo__optionLineOne">Registry</span>
          </div>
        </Link>
        <Link to="/" className="menuTwo__link">
          <div className="menuTwo__option">
            <span className="menuTwo__optionLineOne">Sell</span>
          </div>
        </Link>
        {/*checkout link */}

      </div>
      <div className="MenuTwo__text-wrapper">
        <Link to="/" className="menuTwo__link">
          <div className="menuTwo__text">
            <div className="menuTwo__option">
              <span className="menuTwo__optionLineTwo">Black Life Matter/Covid19</span>
            </div>
          </div>
        </Link>
      </div>

    </nav>
  );
}

export default Menutwo;
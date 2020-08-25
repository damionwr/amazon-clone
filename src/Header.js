import React, { useState } from 'react'
import './Header.css'

import {
  Link
} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Sidemenu from "./Sidemenu";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';








function Header() {
  /*we call the function here to recive data for the basket*/
  const [{ basket }] = useStateValue();


  console.log(basket);
  return (
    <nav className="header" >

      <Sidemenu />



      <Link to="/login" >
        <img className="header__logo"
          src="/images/amazon_PNG25.png"
          alt="" />

      </Link>

      {/*Search link */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcons" />
      </div>
      {/*Login link */}
      <div className="headerNav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        {/*Return link */}

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>



        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Amazon</span>
          </div>
        </Link>
        <Link to="/cheackout" className="header__link">
          <div className="header__checkoutBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__CartCount">
              {basket?.length}</span>
          </div>

        </Link>

      </div>


    </nav>
  );
}

export default Header;
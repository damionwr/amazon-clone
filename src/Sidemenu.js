import React, { useState } from 'react'
import './Sidemenu.css'
import {
  Link
} from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import DehazeIcon from '@material-ui/icons/Dehaze';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Sidemenu() {


  const handleDrawer = () => {
    setOpen(true)
  }

  const [open, setOpen] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header">
      <div className="menu__drawer">
        <DehazeIcon onClick={handleDrawer} />
      </div>

      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}



      >
        <Link to="/login" className="header__link">
          <div className="drawer__header">
            <AccountCircleIcon style={{ fontSize: 30 }} />
            <h3 className="drawer__head">Hello, Sign in</h3>
          </div>

        </Link>


        <div className="drawer__list">

          <List>
            <ListItem button>
              <ListItemText primary={"Mens Clothing"} />
              <ListItemIcon>
                <ArrowForwardIosIcon onClick={handleClick} style={{ fontSize: 18 }} />
              </ListItemIcon>
            </ListItem>

            <Menu
              id="simple-menus"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/login" className="Drawer__link">
                <MenuItem >Men SlimFit Jeans</MenuItem>
              </Link>
              <Link to="/login" className="Drawer__link">
                <MenuItem >Men Vneck long Sleev Shirt</MenuItem>
              </Link>
              <Link to="/login" className="Drawer__link">
                <MenuItem >Leg warmer for Men</MenuItem>
              </Link>
              <Link to="/login" className="Drawer__link">
                <MenuItem >Men Sports Blazer all color</MenuItem>
              </Link>

            </Menu>
            <ListItem button>
              <ListItemText primary={"Women Clothing"} />
              <ListItemIcon>
                <ArrowForwardIosIcon onClick={handleClick} style={{ fontSize: 18 }} />
              </ListItemIcon>
            </ListItem>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/login" className="Drawer__link">
                <MenuItem >Women SlimFit Jeans</MenuItem>
              </Link>
              <Link to="/login" className="Drawer__link">
                <MenuItem >Women Vneck long Sleev Shirt</MenuItem>
              </Link>
              <Link to="/login" className="Drawer__link">
                <MenuItem >Leggins warmer for Women</MenuItem>
              </Link>
              <Link to="/login" className="Drawer__link">
                <MenuItem >Women Sports Bra all color</MenuItem>
              </Link>

            </Menu>

          </List>




        </div>
      </Drawer>
    </div>
  )
}

export default Sidemenu

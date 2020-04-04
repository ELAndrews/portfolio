import React, { useState } from "react";
import signature from "../assets/images/signature.png";
import { HeaderContainer, NavLinks, Img, DesktopMenu, BurgerList, MobileMenu, useStyles, Button } from "../assets/styling/components/headerStyling";
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


export default function Header() {

  const classes = useStyles();
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideMenu = side => (
    <div>
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer('right', false)}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <BurgerList>
          <NavLinks exact to="/home" onClick={toggleDrawer('right', false)} className="burgerLinks">HOME</NavLinks>
        </BurgerList>
        <Divider />
        <BurgerList>
          <NavLinks to="/about" onClick={toggleDrawer('right', false)} className="burgerLinks">ABOUT</NavLinks>
        </BurgerList>
        <Divider />
        <BurgerList>
          <NavLinks to="/work" onClick={toggleDrawer('right', false)} className="burgerLinks">WORK</NavLinks>
        </BurgerList>
        <Divider />
        <BurgerList>
          <NavLinks to="/contact" onClick={toggleDrawer('right', false)} className="burgerLinks">CONTACT</NavLinks>
        </BurgerList>
      </List>
    </div>
  )


  return (
    <HeaderContainer>
      <Img
        className="signature"
        src={signature}
        alt="signature"
      />
      <DesktopMenu>
        <NavLinks exact to="/home">HOME</NavLinks>
        <NavLinks to="/about">ABOUT</NavLinks>
        <NavLinks to="/work">WORK</NavLinks>
        <NavLinks to="/contact">CONTACT</NavLinks>
      </DesktopMenu>
      {/* Header media query burger menu */}
      <MobileMenu>
        <Button id="burger" onClick={toggleDrawer('right', true)}><MenuIcon /></Button>
        <SwipeableDrawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {sideMenu('right')}
        </SwipeableDrawer>
      </MobileMenu>
    </HeaderContainer>
  );
}

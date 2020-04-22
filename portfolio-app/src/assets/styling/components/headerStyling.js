import { SOLID, MEDIA } from "../variables";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';


export const HeaderContainer = styled.div`
    width: 100vw;
    height: 80px;
    background-color: ${SOLID.darkGreen};
    position: absolute;
    top: 0px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
`;

export const DesktopMenu = styled.div`
@media (max-width: ${MEDIA.LARGE_MOBILE}) {
    display: none;
}
`;

export const MobileMenu = styled.div`
    display: none;
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        display: block;
    }
`;

export const NavLinks = styled.a`
    color: ${SOLID.sage};
    text-decoration: none;
    margin: auto 15px;
    letter-spacing: 2px;
    font-size: 0.7rem;
    text-underline-position: under;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    } 
     &.active {
        text-decoration: underline;
    }
    `;

export const Img = styled.img`
    width: 45%;
    padding: 20px;
    min-width: 200px;
    max-width: 400px;
`;

// Menu Drawer

export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
}));

export const BurgerList = styled.div`
    display: flex;
    line-height: 4;
`;

export const Button = styled.button`
    border: none;
    color: ${SOLID.white};
    background-color: ${SOLID.darkGreen};
    padding: 20px;
`;
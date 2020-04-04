import styled, { keyframes } from "styled-components";
import { SOLID, MEDIA } from "../variables";
import { NavLink } from "react-router-dom";

export const BoxContainer = styled.div`
    height: 550px;
    max-width: 700px;
    margin: auto;
`;

export const Box1 = styled.div`
    height: 350px;
    width: 350px;
    border-radius: 5px;
    box-shadow: 3px 5px 4px 3px ${SOLID.white};
    position: relative;
    top: 15%;
    left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: ${MEDIA.MOBILE}) {
        height: 350px;
        width: 300px;
       left: 10%;
       top: 10%;
    }

    @media (max-width: ${MEDIA.SMALL_MOBILE}) {
       top: 15%;
       left: 5%;
    }
`;


export const Box2 = styled.div`
    height: 150px;
    width: 80%;
    max-width: 400px; 
    border-radius: 5px;
    background-color: rgb(237, 211, 194, 0.5);
    box-shadow: 3px 5px 4px 3px ${SOLID.white};
    position: relative;
    left: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    @media (max-width: ${MEDIA.MOBILE}) {
        left: 10%;
        top: 5%;
    }
    
    @media (max-width: ${MEDIA.SMALL_MOBILE}) {
        left: 10%;
        top: 10%;
    }
    `;

export const Box3 = styled.div`
  height: 180px;
  width: 150px;
  border-radius: 5px;
  background-color: rgb(118, 140, 109, 0.3);
  box-shadow: 3px 5px 4px 3px ${SOLID.white};
  position: relative;
  bottom: 70%;
  left: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media (max-width: ${MEDIA.MOBILE}) {
      left: 68%;
      bottom: 75%;
      width: 130px;
    }
    
    @media (max-width: ${MEDIA.SMALL_MOBILE}) {
        bottom: 87%;
        left: 50;
        height: 130px;
        width: 100px;
    }
    `;

export const Img = styled.img`
        height: 80%;
        overflow: hidden;
        filter: grayscale(40%);
        border-radius: 5px;
    `;

export const H1 = styled.h1`
   font-size: 3.4rem;
   color: ${SOLID.darkGreen};
   padding-top: 20px;
`;

export const H2 = styled(NavLink)`
   font-size: 2.4rem;
   color: ${SOLID.darkGreen};
   text-decoration: none;
   text-underline-position: under;
    
    &:hover {
        text-decoration: underline;
    }

`;

export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const P = styled.p`
line-height:1.1;
color: ${SOLID.darkGreen};
font-size: 1.1rem;
margin-top: 5px;
`;

const Bounce = keyframes`
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-3px); }
    100% { transform: translateY(0); }
`;

export const Arrow = styled(NavLink)`
    background-color: ${SOLID.white};
    text-align: center;
    font-size: 1.6rem;
    position: absolute;
    right: 2px;
    top: 80%;
    border: none;
    height: 40px;
    width: 40px;

    &:hover {
       animation: ${Bounce} 1s infinite;
    }
`;
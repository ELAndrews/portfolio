import styled, { keyframes } from "styled-components";
import { SOLID, MEDIA } from "../variables";
import { NavLink } from "react-router-dom";

export const BoxContainer = styled.div`
    height: 68vh;
    width: 100%;
    margin: 0px auto;
    background-color: ${SOLID.pastelGreen};
    z-index: 1;
    text-align: center;
    
    @media (max-width: ${MEDIA.MOBILE}) {
        height: 60vh;
    }
`;

export const ArrowContainer = styled.div`
    border-top: 15vh solid ${SOLID.pastelGreen};
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
`;

export const Sentence1 = styled.div`
  color: ${SOLID.darkGreen};
    font-size: 3rem;
    padding: 5% 0px 5px 0px;
    width: 80%;
    margin: 0px auto;

    @media (max-width: ${MEDIA.MOBILE}) {
      font-size: 2rem;
      padding: 10% 0px 5px 0px;
    }
`;


export const Sentence = styled.div`
  color: ${SOLID.darkGreen};
  font-size: 1rem;
  margin-bottom: 50px;

  @media (max-width: ${MEDIA.MOBILE}) {
    margin-bottom: 10px;
    }
`;


export const ImgBack = styled.img`
   height: 60%;
    margin: 0px auto 5%;

`;

const Bounce = keyframes`
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-6px); }
        100% { transform: translateY(0); }
    `;

export const Arrow = styled.a`
        border-top: 20px solid ${SOLID.darkGreen};
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        cursor: pointer;
    
    
        &:hover {
           animation: ${Bounce} 1s infinite;
        }
    
    `;



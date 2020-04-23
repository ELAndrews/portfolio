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


// export const Box1 = styled.div`
//     height: 350px;
//     width: 350px;
//     border-radius: 5px;
//     box-shadow: 3px 5px 4px 3px ${SOLID.white};
//     position: relative;
//     top: 15%;
//     left: 5%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     @media (max-width: ${MEDIA.MOBILE}) {
//         height: 350px;
//         width: 300px;
//        left: 10%;
//        top: 10%;
//     }

//     @media (max-width: ${MEDIA.SMALL_MOBILE}) {
//        top: 15%;
//        left: 5%;
//     }
// `;


// export const Box2 = styled.div`
//     height: 150px;
//     width: 80%;
//     max-width: 400px; 
//     border-radius: 5px;
//     background-color: rgb(237, 211, 194, 0.5);
//     box-shadow: 3px 5px 4px 3px ${SOLID.white};
//     position: relative;
//     left: 20%;
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;

//     @media (max-width: ${MEDIA.MOBILE}) {
//         left: 10%;
//         top: 5%;
//     }

//     @media (max-width: ${MEDIA.SMALL_MOBILE}) {
//         left: 10%;
//         top: 10%;
//     }
//     `;

// export const Box3 = styled.div`
//   height: 180px;
//   width: 150px;
//   border-radius: 5px;
//   background-color: rgb(118, 140, 109, 0.3);
//   box-shadow: 3px 5px 4px 3px ${SOLID.white};
//   position: relative;
//   bottom: 70%;
//   left: 70%;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   @media (max-width: ${MEDIA.MOBILE}) {
//       left: 68%;
//       bottom: 75%;
//       width: 130px;
//     }

//     @media (max-width: ${MEDIA.SMALL_MOBILE}) {
//         bottom: 87%;
//         left: 50;
//         height: 130px;
//         width: 100px;
//     }
//     `;

// export const Img = styled.img`
//         height: 80%;
//         overflow: hidden;
//         filter: grayscale(40%);
//         border-radius: 5px;
//     `;

// export const H1 = styled.h1`
//    font-size: 3.4rem;
//    color: ${SOLID.darkGreen};
//    padding-top: 20px;
// `;

// export const H2 = styled(NavLink)`
//    font-size: 2.4rem;
//    color: ${SOLID.darkGreen};
//    text-decoration: none;
//    text-underline-position: under;

//     &:hover {
//         text-decoration: underline;
//     }

// `;

// export const Intro = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
// `;

// export const P = styled.p`
// line-height:1.1;
// color: ${SOLID.darkGreen};
// font-size: 1.1rem;
// margin-top: 5px;
// `;

import { SOLID, MEDIA } from "../variables";
import styled from 'styled-components';

export const H1 = styled.h1`
   font-size: 3.4rem;
   color: ${SOLID.darkGreen};
   padding-top: 20px;
   text-align: center;
`;

export const AboutContainer = styled.div`
    width: 80%;
    display: flex;
    text-align: center;
    margin: 0px auto;
    padding-bottom: 80px;
    @media (max-width: ${MEDIA.MOBILE}) {
    flex-direction: column;
}
`;


export const Summary = styled.div`
box-shadow: 2px 4px 4px 3px ${SOLID.white};
padding: 20px;
`;


export const Bullets = styled.div`

`;


{/* Mobile and larger */ }

export const Technologies = styled.div`
    display: flex;
    flex-direction: column;
@media (max-width: ${MEDIA.MOBILE}) {
    display: none;
}
`;

export const IconBox = styled.div`
    width: 10%;
    min-width: 100px;
    height: 10%;
    min-height: 80px;

`;

export const IconImg = styled.img`
    height: 50px;
    position: relative;
    top: 12px;

    &:hover + .iconName{
        display: block;
    }
`;

export const IconName = styled.p`
display: none;
position: relative;
left: 50px;
bottom: 15px;
background-color: ${SOLID.white};
border-radius:  8px;
`;

{/*  Smaller mobile*/ }

export const TechnologiesSmall = styled.div`
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 0px auto;
        @media (min-width: ${MEDIA.MOBILE}) {
    display: none;
}
  `;


export const IconBoxSmall = styled.div`
height: 30px;
width: 30px;
`;

export const IconImgSmall = styled.img`
height: 30px;
filter: grayscale(50%);
margin-top: 80px;
`;
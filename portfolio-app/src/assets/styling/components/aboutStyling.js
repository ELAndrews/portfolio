import { SOLID, MEDIA } from "../variables";
import styled from 'styled-components';


export const AboutContainer = styled.div`
    width: 80%;
    display: flex;
    text-align: center;
    margin: 10px auto 0px;
    padding-bottom: 80px;
    flex-direction: column;
    @media (max-width: ${MEDIA.MOBILE}) {
}
`;


export const Summary = styled.div`
box-shadow: 2px 4px 4px 3px ${SOLID.white};
padding: 20px;
margin: 20px auto;
`;


export const Bullets = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px auto;
  justify-content: space-evenly;
`;

export const BulletCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  min-width: 200px;
  margin: 10px;
  align-items: center;

`;

export const BInfo = styled.div`
box-shadow: 2px 4px 4px 3px ${SOLID.white};
border: 0.5px solid ${SOLID.sage}; 
padding: 20px;
border-radius: 5px;
position: relative;
bottom: 25px;
`;

export const BTitle = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BIcon = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-content: center;
  background-color: ${SOLID.sage};
  color: white;
  padding: 12px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const BText = styled.p`
  font-size: 0.8rem; 
  margin-top: 5px;
`;

{/*  Smaller mobile*/ }

export const TechnologiesSmall = styled.div`
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 0px auto;
        @media (max-width: ${MEDIA.MOBILE}) {
          flex-wrap: wrap
}
  `;


export const IconBoxSmall = styled.div`
height: 70px;
width: 70px;
margin: 5px;

@media (max-width: ${MEDIA.LARGE_MOBILE}) {
  height: 50px;
  width: 50px;
}
`;

export const IconImgSmall = styled.img`
height: 70px;
width: 70px;
filter: grayscale(50%);
margin-top: 30px;
@media (max-width: ${MEDIA.LARGE_MOBILE}) {
  height: 50px;
  width: 50px;
}
`;
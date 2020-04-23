import styled from "styled-components";
import { SOLID, MEDIA } from "../variables";

export const ContactContainer = styled.div`
    width: 80%;
    margin: 0px auto 150px;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        flex-direction: column;
}
`;

export const FormContainer = styled.div`
    width: 45%;
    max-width: 400px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 4px 6px 6px 3px ${SOLID.white};

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        width: 100%;
        margin: 10px auto; 
}
`;

export const FormContainer1 = styled.div`
    width: 45%;
    max-width: 400px;
    padding: 20px;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        width: 100%;
        margin: 10px auto; 
}
`;

export const SubmissionContainer = styled.div`
    background-color: rgb(237, 211, 194, 0.8);
    width: 45%;
    height: 100%;
    border-radius: 10px;
    margin-top: 10%;
    box-shadow: 4px 6px 6px 3px ${SOLID.white};
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: none;
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
`;

export const P = styled.p`
    width: 50%;
    margin: 0px auto 20px;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        width: 70%;
       padding-left: 20px;
}
`

export const Link = styled.a`
    box-shadow: 2px 4px 4px 3px ${SOLID.white};
    border: 0.5px solid ${SOLID.sage}; 
    padding: 20px;
    border-radius: 5px;
    margin: 10px auto;
    color: ${SOLID.sage};
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    width: 180px;

    &:hover {
      color: ${SOLID.pastelPeach};
      border: 0.5px solid ${SOLID.pastelPeach}; 

      .icon {
        background-color: ${SOLID.pastelPeach}
  
      }
    }

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
  margin: auto 0px;
  width: 60%;
  color: ${SOLID.darkGreen};
`;
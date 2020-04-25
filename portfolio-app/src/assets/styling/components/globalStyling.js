import styled from 'styled-components';
import { SOLID } from "../variables";

export const Container = styled.div`
    padding-top: 80px;
    margin: 0px auto;
    width: 100%;
    min-height: calc(100vh - 80px);
`;

export const H1 = styled.h1`
   font-size: 3rem;
   color: ${SOLID.darkGreen};
   padding: 20px 0px 20px;
   text-align: center;
   letter-spacing: 6px;
`;

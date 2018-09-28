import styled from "styled-components";
import { device } from '../Style/Devices';

export const TopNavContainer = styled.div`
  position: fixed;
  margin: 0;
  padding: 5%;
  width: 100%;
  height: auto;
  background-color: #222f5b;
  font-size: 100%;
  font-weight: 600;
  color: #FFFFFF;
  z-index: 2;

  @media ${device.mobileL} {
    font-size: 150%;
  }

  @media ${device.between1} {
    padding: 4%;
  }

  @media ${device.laptop} {
    padding: 2% 2% 2% 5%;
  }

  @media ${device.laptopL} {
    padding: 2% 2% 2% 15%;
  }

  @media ${device.desktop} {
    font-size: 200%;
    padding: 2% 2% 2% 15%;
  }
`;
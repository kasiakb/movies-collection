import styled from "styled-components";
import { device } from '../Style/Devices';

export const ListContainer = styled.div`
  display: flex;
  flex-dierction: row;
  flex-wrap: wrap;
	justify-content: center;
  background: #fdfdfd;
  padding: 25% 5% 5% 5%;

  @media ${device.mobileM} { 
    padding: 25% 4% 5% 4%;
  }

  @media ${device.between0} {
    padding: 25% 8% 5% 8%;
  }
  
  @media ${device.between1} {
    padding: 20% 5% 5% 5%;
    justify-content: space-around
  }

  @media ${device.laptop} {
    padding: 15% 5% 5% 5%;
    justify-content: space-between
  }

  @media ${device.laptopL} {
    padding: 10% 15% 5% 15%;
  }

  @media ${device.desktop} {
    padding: 8% 15% 5% 15%;
  }
`;

import styled from "styled-components";
import { device } from '../Style/Devices';

export const ListContainer = styled.div`
  position: relative;
  display: flex;
  flex-dierction: row;
  flex-wrap: wrap;
	justify-content: center;
  background: #fdfdfd;
  margin-top: 5%;
  padding: 20% 5% 5% 5%;

  @media ${device.mobileM} { 
    padding: 20% 4% 5% 4%;
  }

  @media ${device.between0} {
    justify-content: space-between;
    padding: 20% 8% 5% 8%;
  }
  
  @media ${device.between1} {
    padding: 20% 5% 5% 5%;
  }

  @media ${device.laptop} {
    padding: 10% 5% 5% 5%;
  }

  @media ${device.laptopL} {
    padding: 10% 15% 5% 15%;
  }

  @media ${device.desktop} {
    padding: 8% 15% 5% 15%;
  }
`;

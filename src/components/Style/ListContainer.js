import styled from "styled-components";
import { device } from '../Style/Devices';

export const ListContainer = styled.div`
  display: flex;
  flex-dierction: row;
  flex-wrap: wrap;
	justify-content: center;
  background: #fdfdfd;
  padding: 5% 5% 5% 5%;

  @media ${device.mobileM} { 
    padding: 5% 3% 5% 3%;
  }
  
  @media ${device.between1} {
    justify-content: space-between;
    padding: 5% 5% 5% 5%;
  }

  @media ${device.laptopL} {
    padding: 5% 15% 5% 15%;
  }
  
`;

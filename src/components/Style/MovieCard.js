import styled from "styled-components";
import { device } from '../Style/Devices';

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  background: #f2f2f2
  margin-bottom: 4%;

  @media ${device.mobileM} { 
    width: 100%;
  }

  @media ${device.mobileM} { 
    width: 90%;
  }

  @media ${device.between1} { 
    width: 29%;
  }

  @media ${device.laptop} { 
    width: 48%;
    flex-direction: row;
  }

  @media ${device.desktop} { 
    width: 30%;
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  margin-top: 4%;
  overflow: hidden;

  @media ${device.mobileM} {
    margin: 0;
  }

  @media ${device.between1} {
    margin-top: 4%;
  }

  @media ${device.laptop} {
    margin-top: 0;
    overflow: visible;
  }
`;

export const ImagePosterSmall = styled.img`
  @media ${device.mobileM} {
    display: none;
  }

  @media ${device.between1} {
    display: block;
  }
`;

export const ImagePoster = styled.img`
  display: none;

  @media ${device.mobileM} {
    display: block;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

export const ImageBackdrop = styled.img`
  display: none;

  @media ${device.mobileL} {
    display: block;
    width: 500px;
    height: 278px;
  }

  @media ${device.between1} {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  @media ${device.laptop} {
    width: 100%
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    justify-content: flex-start;
    // margin-top: 4%;
  }
`;

export const MainInfo = styled.div`
  padding: 4%;

  @media ${device.laptop} {
    width: 90%;
    height: auto;
  }
`;

export const OverviewnInfo = styled.div`
  display: none;

  @media ${device.laptop} {
    margin-top: 8%;
    padding: 4%;
    display: block;
  }
`;

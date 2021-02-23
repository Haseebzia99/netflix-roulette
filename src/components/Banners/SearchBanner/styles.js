import styled from "styled-components";
import movieBackground from "../../../assets/images/banner.jpg";

export const SearchBannerContainer = styled.div`
  z-index: 1000;
  position: relative;
  // max-width: 400rem;
  margin: auto;
  height: 50vh;
  width: 100%;
  background: url(${movieBackground}) no-repeat center center fixed;
`;

export const SearchContent = styled.div`
  margin-top: 70px;
  //   position: absolute;
  width: 100%;
`;

export const SearchTitle = styled.h2`
  color: white;
  font-weight: lighter;
  font-size: 3rem;
  letter-spacing: 2px;
`;

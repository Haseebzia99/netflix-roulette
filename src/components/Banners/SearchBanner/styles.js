import styled from "styled-components";
import movieBackground from "../../../assets/images/banner.jpg";

export const SearchBannerContainer = styled.div`
  z-index: 1000;
  height: 60vh;
  width: 100%;
  background: url(${movieBackground});
`;

export const SearchBannerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

export const SearchContent = styled.div`
  margin-top: 70px;
    position: absolute;
  width: 100%;
`;

export const SearchTitle = styled.h2`
  color: white;
  font-weight: lighter;
  font-size: 3rem;
  letter-spacing: 2px;
`;
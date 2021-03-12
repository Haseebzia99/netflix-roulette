import React from "react";
import { Link } from "react-router-dom";

import {
  Title,
  TitleContainer,
  DescriptionContainer,
  Description,
  Year,
} from "./styles";

export const Movie = (moviesDetail) => {
  return (
    <>
      <Link to="/error">
          <TitleContainer>
            <Title>{moviesDetail.title}</Title>
            <Year>{moviesDetail.year}</Year>
          </TitleContainer>
          <DescriptionContainer>
            <Description>{moviesDetail.description}</Description>
          </DescriptionContainer>
      </Link>
    </>
  );
};

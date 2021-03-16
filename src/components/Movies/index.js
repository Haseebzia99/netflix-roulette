import React from "react";
import { Link } from "react-router-dom";

import {
  Title,
  MovieContainer,
  TitleContainer,
  DescriptionContainer,
  Description,
  Year,
} from "./styles";

export const Movie = (moviesDetail) => {
  return (
    <>
      <Link to="/error">
        <MovieContainer>
          <TitleContainer>
            <Title>{moviesDetail.title}</Title>
          </TitleContainer>
            <Year>{moviesDetail.year}</Year>
            <Description>{moviesDetail.description}</Description>
        </MovieContainer>
      </Link>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";

import {
  MovieContainer,
  Title,
  TitleContainer,
  DescriptionContainer,
  Description,
  Year,
} from "./styles";

export const Movie = () => {
  return (
    <>
      <Link to="/error">
        <MovieContainer>
          <TitleContainer>
            <Title>Movie</Title>
            <Year>2021</Year>
          </TitleContainer>
          <DescriptionContainer>
            <Description>This is a movies test</Description>
          </DescriptionContainer>
        </MovieContainer>
      </Link>
    </>
  );
};

import React from "react";
import { AddMovieButtonContainer, AddMovieButton } from "./indexStyles";

export const AddMovie = ({ addMovieModal }) => {
  return (
    <AddMovieButtonContainer>
      <AddMovieButton red onClick={addMovieModal}>
        + ADD MOVIE
      </AddMovieButton>
    </AddMovieButtonContainer>
  );
};

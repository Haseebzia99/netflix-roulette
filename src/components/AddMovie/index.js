import React from "react";

//styles
import { AddMovieButtonContainer, AddMovieButton } from "./styles";

export const AddMovie = ({ addMovieModal }) => {
  return (
    <AddMovieButtonContainer>
      <AddMovieButton red onClick={addMovieModal}>
        + ADD MOVIE
      </AddMovieButton>
    </AddMovieButtonContainer>
  );
};

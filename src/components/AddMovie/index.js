import React from "react";
import { I18N_KEYS, TRANSLATIONS, I18N_LANGUAGES } from "../../core/I18Y";
//styles
import { AddMovieButtonContainer, AddMovieButton } from "./styles";

export const AddMovie = ({ addMovieModal }) => {
  return (
    <AddMovieButtonContainer>
      <AddMovieButton red onClick={addMovieModal}>
      {TRANSLATIONS[I18N_LANGUAGES.EN][I18N_KEYS.ADD_MOVIE]}
      </AddMovieButton>
    </AddMovieButtonContainer>
  );
};

import React, { useState } from "react";
import { Formik } from 'formik';
import { I18N_KEYS, TRANSLATIONS, I18N_LANGUAGES } from "../../core/I18Y";

import { AddMovieModal } from './Modal';

//styles
import {
  AddMovieButtonContainer,
  AddMovieButton,
  ModalTitle,
  ModalInput,
  ModalContainer,
  ButtonContainer,
  ResetButton,
  SubmitButton,
  ErrorText,
  SelectorContainer,
  ArrowBox,
  DropDown,
  DateSelector,
  IconBox
} from "./styles";

export const AddMovie = () => {

  const [isOpen, setIsOpen] = useState(false);

  const initialValues = {
    title: "",
    release_date: "",
    poster_path: "",
    genres: "",
    overview: "",
    runtime: "",
  };

  const onReset = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
  };

  const dropdownOptions = [
    { key: "Select Genre", value: "" },
    { key: "Drama", value: "drama" },
    { key: "Adventure", value: "adventure" },
    { key: "Action", value: "action" },
    { key: "Family", value: "family" },
    { key: "Fantasy", value: "fantasy" },
  ];

  return (
    <AddMovieButtonContainer>
      <AddMovieButton red onClick={() => setIsOpen(true)}>
      {TRANSLATIONS[I18N_LANGUAGES.EN][I18N_KEYS.ADD_MOVIE]}
      </AddMovieButton>

      <AddMovieModal open={isOpen} onClose={() => setIsOpen(false)}>
      <Formik initialValues={initialValues} >
      {(formik) => {
        return (
          <ModalContainer>
            <ModalTitle>Title</ModalTitle>
            <ModalInput name="title" type="text" />
            <ErrorText name="title" component="div" />
            {/* Release Date */}
            <ModalTitle>Release Date</ModalTitle>
            <SelectorContainer>
              <DateSelector
                control="release_date"
                name="date"
                placeholderText="Select Date"
              />
              <IconBox size={20} />
            </SelectorContainer>
            <ErrorText name="date" component="div" />
            {/* Movie URL */}
            <ModalTitle>Movie Url</ModalTitle>
            <ModalInput name="poster_path" type="text" />
            <ErrorText name="poster_path" component="div" />
            {/* Genre */}
            <ModalTitle>Genre</ModalTitle>
            <SelectorContainer>
              <DropDown
                control="select"
                name="genres"
                options={dropdownOptions}
              />
              <ArrowBox size={20} />
            </SelectorContainer>
            <ErrorText name="genre" component="div" />
            {/* Overview */}
            <ModalTitle>Overview</ModalTitle>
            <ModalInput name="overview" type="text" />
            <ErrorText name="overview" component="div" />
            {/* Title */}
            <ModalTitle>Runtime</ModalTitle>
            <ModalInput name="runtime" type="text" />
            <ErrorText name="runtime" component="div" />
            {/* Runtime */}
            <ButtonContainer>
              <ResetButton onClick={onReset}>RESET</ResetButton>
              <SubmitButton type="submit" primary>
                SUBMIT
              </SubmitButton>
            </ButtonContainer>
          </ModalContainer>
        );
      }}
    </Formik>
      </AddMovieModal>

    </AddMovieButtonContainer>
  );
};

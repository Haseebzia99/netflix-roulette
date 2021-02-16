import React from "react";

//components

import { Search } from "../../Search";
// import AddMovie from "../../AddMovie/AddMovie";
// import Modal from "../../Modal/Modal";
// import MovieModal from "../../MovieModal/MovieModal";

//styles

import logo from '../../../assets/images/netflix-logo.png';


import {
  SearchTitle,
  SearchBannerContainer,
  SearchContent,
} from "./styles";



export const SearchBanner = ({
  movieModal,
  addMovieModal,
  closeModal,
  modalTitle,
  setMovieModal,
}) => {
  return (
    <SearchBannerContainer>
      <img src={logo} className="netflix--logo" alt="nt-log"/>
      {/* <AddMovie addMovieModal={addMovieModal} /> */}
      <SearchContent>
        <SearchTitle>FIND YOUR MOVIE</SearchTitle>
        <Search/>
      </SearchContent>

      {/* <Modal open={movieModal} onClose={() => setMovieModal(false)}>
        <MovieModal modalTitle={modalTitle} />
      </Modal> */}
    </SearchBannerContainer>
  );
};


import React from "react";
import { I18N_KEYS, TRANSLATIONS, I18N_LANGUAGES } from "../../../core/I18Y";

//components

import { Search } from "../../Search";
import { AddMovie } from "../../AddMovie";
// import Modal from "../../Modal/Modal";
// import MovieModal from "../../MovieModal/MovieModal";

//styles

import logo from "../../../assets/images/netflix-logo.png";

import { SearchTitle, SearchBannerContainer, SearchContent, SearchBannerHeader} from "./styles";

export const SearchBanner = ({
  movieModal,
  addMovieModal,
  closeModal,
  modalTitle,
  setMovieModal,
}) => {
  return (
    <SearchBannerContainer>
      <SearchBannerHeader>
        <img src={logo} className="netflix--logo" alt="nt-log" />
        {/* <AddMovie addMovieModal={addMovieModal} /> */}
        <AddMovie />
      </SearchBannerHeader>
      <SearchContent>
        <SearchTitle>
          {TRANSLATIONS[I18N_LANGUAGES.EN][I18N_KEYS.FIND_YOUR_MOVIE]}
        </SearchTitle>
        <Search />
      </SearchContent>
      {/* <Modal open={movieModal} onClose={() => setMovieModal(false)}>
        <MovieModal modalTitle={modalTitle} />
      </Modal> */}
    </SearchBannerContainer>
  );
};

import React from "react";

//components
import { SearchBanner } from "../SearchBanner";

//styles
import { BannerContainerSearch, BannerContainerMovieDetails } from "./styles";

export default function Banner({
  movieModal,
  closeModal,
  switchBanner,
  setSwitchBanner,
  movieDetailsId,
  modalTitle,
  setMovieModal,
}) {
  if (switchBanner) {
    return (
      <BannerContainerMovieDetails>
      </BannerContainerMovieDetails>
    );
  }
  return (
    <BannerContainerSearch>
      <SearchBanner
        setMovieModal={setMovieModal}
        modalTitle={modalTitle}
        movieModal={movieModal}
        closeModal={closeModal}
      />
    </BannerContainerSearch>
  );
}

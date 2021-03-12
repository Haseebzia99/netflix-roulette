import React from "react";
import { SearchBanner } from "../Banners/SearchBanner";
import { AddMovie } from "../AddMovie/index";
import { Movieslist } from  "../MoviesList/index";

export function Home() {
  return (
    <div className="netflix-header">
      <SearchBanner />
      <AddMovie />
      <Movieslist />
    </div>
  );
}

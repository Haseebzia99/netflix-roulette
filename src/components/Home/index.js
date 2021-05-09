import React from "react";
import { SearchBanner } from "../Banners/SearchBanner";
import { Movieslist } from  "../MoviesList/index";

export function Home() {
  return (
<>
      <SearchBanner />
      <Movieslist />
</>
  );
}

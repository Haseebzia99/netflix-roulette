import React from 'react';
import { SearchBanner } from "../Banners/SearchBanner";
import { AddMovie } from "../AddMovie/index";
import { Movie } from "../Movies";

export function Home() {
    return (
    <div className="netflix-header">
      <SearchBanner />
      <AddMovie />
      <Movie />
    </div>
    );
  }
  
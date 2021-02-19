export const sortByTitle = (movies) => {
  const sortedMoviesData = movies.sort(function (a, b) {
    //first argument should appear before second argument
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    //first argument should appear after second argument
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    // if equal return zero
    return 0;
  });

  return {
    type: "SORT_BY_TITLE",
    payload: {
      sortedMovies: sortedMoviesData,
    },
  };
};

export const sortByRuntime = (movies) => {
  const sortedMoviesData = movies.sort(function (a, b) {
    //if b is larger than a returns negative number - which means a should come before it
    return b.runtime - a.runtime;
  });

  return{
    type: "SORT_BY_TITLE",
    payload: {
      sortedMovies: sortedMoviesData,
    },
  };
};

export const sortByRating = (movies) => {
  const sortedMoviesData = movies.sort(function (a, b) {
    //if b is larger than a returns negative number - which means a should come before it
    return b.vote_average - a.vote_average;
  });

  return {
    type: "SORT_BY_RATING",
    payload: {
      sortedMovies: sortedMoviesData,
    },
  };
};

export const sortByReleaseDate = (movies) => {
  const sortedMoviesData = movies.sort(function (a, b) {
    var dateA = new Date(a.release_date),
      dateB = new Date(b.release_date);
    return dateB - dateA;
  });

  return {
    type: "SORT_BY_RELEASE_DATE",
    payload: {
      sortedMovies: sortedMoviesData,
    },
  };
};

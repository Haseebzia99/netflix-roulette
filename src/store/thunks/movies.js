import axios from "../../core/axiosHelper";

export const loadMovies = () => async (dispatch) => {
  //FETCH AXIOS
  const allMoviesData = await axios.get("/movies?limit=12");
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      allMovies: allMoviesData.data.data,
    },
  });
};

export const fetchSearch = (movie_name) => async (dispatch) => {
  dispatch({
    type: "INIT_FETCH_MOVIES",
  });
  const searchMovieData = await axios.get(
    `/movies?search=${movie_name}&searchBy=title`
  );
  dispatch({
    type: "FETCH_SEARCHED_MOVIES",
    payload: {
      searchedMovies: searchMovieData.data.data,
    },
  });
};

export const fetchSorted = (movie_genre) => async (dispatch) => {
  dispatch({
    type: "INIT_FETCH_MOVIES",
  });
  const sortedMoviesData = await axios.get(
    `/movies?limit=100&searchBy=genres&filter=${movie_genre}`
  );
  dispatch({
    type: "FETCH_SORTED_MOVIES",
    payload: {
      sortedMovies: sortedMoviesData.data.data,
    },
  });
};
import instance from "../../core/axiosHelper";
import ACTION_TYPES from "../actionTypes";

export const loadMovies = () => async (dispatch) => {
  //FETCH AXIOS
  const allMoviesData = await instance.get("/movies?limit=12");
  dispatch({
    type: ACTION_TYPES.FETCH_MOVIES,
    payload: {
      allMovies: allMoviesData.data.data,
    },
  });
};

export const fetchSearch = (movie_name) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.INIT_FETCH_MOVIES,
  });
  const searchMovieData = await instance.get(
    `/movies?search=${movie_name}&searchBy=title`
  );
  dispatch({
    type: ACTION_TYPES.FETCH_SEARCHED_MOVIES,
    payload: {
      searchedMovies: searchMovieData.data.data,
    },
  });
};

export const fetchSorted = (movie_genre) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.INIT_FETCH_MOVIES,
  });
  const sortedMoviesData = await instance.get(
    `/movies?limit=100&searchBy=genres&filter=${movie_genre}`
  );
  dispatch({
    type: ACTION_TYPES.FETCH_SORTED_MOVIES,
    payload: {
      sortedMovies: sortedMoviesData.data.data,
    },
  });
};

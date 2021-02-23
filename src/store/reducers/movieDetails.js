import ACTION_TYPES from "../actionTypes";

const initialState = {
  movieDetail: {},
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetail: action.payload.movieDetail,
      };
    default:
      return { ...state };
  }
};

export default movieDetailsReducer;

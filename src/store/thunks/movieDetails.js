import axios from "../../core/axiosHelper";
import ACTION_TYPES from "../actionTypes";

export const getMovieDetails = (id) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LOADING_MOVIE_DETAILS,
  });

  const detailData = await axios.get(`/movies/${id}`);

  dispatch({
    type: ACTION_TYPES.GET_MOVIE_DETAILS,
    payload: detailData.data,
  });
};

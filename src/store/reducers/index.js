import { combineReducers } from "redux";
import movieDetailsReducer from "./movieDetails";

const rootReducer = combineReducers({
  detailedMovie: movieDetailsReducer,
});

export default rootReducer;

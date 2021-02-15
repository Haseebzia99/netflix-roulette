import { combineReducers } from "redux";
import movieDetailsReducer from "./movieDetailsReducer";

const rootReducer = combineReducers({
  detailedMovie: movieDetailsReducer,
});

export default rootReducer;

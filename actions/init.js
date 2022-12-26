import * as TYPES from "./types";
import getConfig from "./getConfig";
import getGenres from "./getGenres";
console.log("delay");
const init = () => async (dispatch) => {
  // TODO: general loading is not used
  console.log("delay3");
  dispatch({ type: TYPES.SET_LOADING });
  await Promise.all([dispatch(getConfig()), dispatch(getGenres())]);
  dispatch({ type: TYPES.UNSET_LOADING });
  console.log("delay2");
};

export default init;

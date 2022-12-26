import Router from "next/router";

import * as TYPES from "./types";
import tmdbAPI from "services/tmdbAPI";
import LINKS from "utils/constants/link";
import { TMDB_API_VERSION } from "config/tmdb";

const getConfig = () => async (dispatch) => {
  try {
    const response = await tmdbAPI.get(`/${TMDB_API_VERSION}/configuration`);
    console.log(response.data);
    console.log(response.data);
    dispatch({
      type: TYPES.FETCH_CONFIG,
      payload: response.data,
    });
  } catch (error) {
    console.log("[getConfig] error => ", error);
    dispatch({ type: TYPES.INSERT_ERROR, payload: error.response });
    Router.push(LINKS.ERROR.HREF);
  }
};

export default getConfig;

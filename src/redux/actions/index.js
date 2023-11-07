export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";

export const addToFavouriteAction = (data) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: data.company_name,
  };
};

export const removeFromFavouriteAction = (data) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: data.company_name,
  };
};

export const removeAction = (fav) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: fav,
  };
};

export const mainSearchAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

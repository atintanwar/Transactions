// Action Types
// export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Action Creators
// export const fetchDATARequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data: any[]) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const fetchDataFailure = (error: string) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

const API = "http://localhost:3004";

// Thunk Action (Async API Call)
export const fetchData = (type: string) => {
  return async (dispatch: Function) => {
    let url;
    try {
      switch (type) {
        case "ALL":
          url = `${API}/transactions`;
          break;
        case "INFLOW":
          url = `${API}/transactions/?cashflow=inflow`;
          break;
        case "OUTFLOW":
          url = `${API}/transactions/?cashflow=outflow`;
          break;
        default:
          dispatch({
            type: "FETCH_DATA_FAILURE",
            payload: "Invalid request type",
          });
          return;
      }
      let response = await fetch(url);
      const json = await response.json();
      dispatch(fetchDataSuccess(json));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(fetchDataFailure(error.message));
      } else {
        dispatch(fetchDataFailure("An unknown error occurred"));
      }
    }
  };
};

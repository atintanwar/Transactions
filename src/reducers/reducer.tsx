const initialState = { data: [], error: null };

const reducer = (state = initialState, action: { type: string; payload: object }) => {
  console.log(action, "action");
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return { ...state, data: action.payload };
    case "FETCH_DATA_FAILURE":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default reducer;

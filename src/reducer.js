export const initialState = {
  videos: [],
};

export const actionTypes = {
  SET_VIDEOS: "SET_VIDEOS",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_VIDEOS:
      return {
        videos: action.videos,
      };
    default:
      return state;
  }
};

export default reducer;

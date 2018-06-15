import { CHANGE_STADIUM } from "./constants";

const initialState = {
  currentStadium: {}
};

export const changeStadium = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_STADIUM:
      return { ...state, currentStadium: action.payload };
    default:
      return state;
  }
};

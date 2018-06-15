import { CHANGE_STADIUM } from "./constants";

export const setCurrentStadium = stadium => ({
  type: CHANGE_STADIUM,
  payload: stadium
});

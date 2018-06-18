import {
  CHANGE_STADIUM,
  REQUEST_DATA_PENDING,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_FAIL
} from "./constants";

const initialStadiumState = {
  id: null
};

export const changeStadium = (state = initialStadiumState, action = {}) => {
  switch (action.type) {
    case CHANGE_STADIUM:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

const initialDataState = {
  isPending: false,
  data: {
    stadiums: [],
    tvchannels: [],
    teams: [],
    groups: {},
    knockout: {}
  },
  error: ""
};

export const requestData = (state = initialDataState, action = {}) => {
  switch (action.type) {
    case REQUEST_DATA_PENDING:
      return { ...state, isPending: true };
    case REQUEST_DATA_SUCCESS:
      return { ...state, data: action.payload, isPending: false };
    case REQUEST_DATA_FAIL:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

import { types } from './action';

const timelineReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TIMELINE:
      return state;
    case types.SUCCESS_TIMELINE_API:
      return {
        ...state,
        data: action.timeline,
      };
    case types.FAIL_TIMELINE_API:
      return {
        ...state,
        // error: action.error,
      };
    default:
      return state;
  }
};

export default timelineReducer;

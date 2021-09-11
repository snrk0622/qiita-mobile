export const types = {
  FETCH_TIMELINE: 'FETCH_TIMELINE',
  SUCCESS_TIMELINE_API: 'SUCCESS_TIMELINE_API',
  FAIL_TIMELINE_API: 'FAIL_TIMELINE_API',
};

export const fetchTimeline = () => {
  return {
    type: types.FETCH_TIMELINE,
  };
};

export const successTimelineApi = (timeline) => {
  return {
    type: types.SUCCESS_TIMELINE_API,
    timeline,
  };
};

export const failTimelineApi = (error) => {
  return {
    type: types.FAIL_TIMELINE_API,
    error,
  };
};

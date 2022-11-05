export const DataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_JOB":
      return { ...state, jobs: [...state.jobs, { ...action.payload }] };

    default:
      return state;
  }
};

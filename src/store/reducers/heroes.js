
const INITIAL_STATE = {
  heroResults: [],
  option: null,
};

export default function heroes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_HEROES':
      return {
        ...state,
        option: null,
        heroResults: action.results,
      };
    case 'ADD_CURRENT_OPTION':
      return {
        ...state,
        option: action.option,
      };

    default:
      return state;
  }
}
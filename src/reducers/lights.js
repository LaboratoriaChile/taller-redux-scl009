import { LIGHT_RED, LIGHT_YELLOW, LIGHT_GREEN } from '../actions/actionTypes';

export default (
  state = {
    red: false,
    yellow: false,
    green: false
  },
  action,
) => {
  switch(action.type) {
    case LIGHT_RED:
    return {
      ...state,
      red: true,
      yellow: false,
      green: false
    }
    case LIGHT_YELLOW:
    return {
      ...state,
      red: false,
      yellow: true,
      green: false
    }
    case LIGHT_GREEN:
    return {
      ...state,
      red: false,
      yellow: false,
      green: true
    }
    default: return state;
  }
}
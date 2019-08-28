import { LIGHT_RED, LIGHT_YELLOW, LIGHT_GREEN} from './actionTypes';

export const turnLightsToRed = dispatch => () => {
  dispatch({
    type: LIGHT_RED
  })
}

export const turnLightsToYellow = dispatch => () => {
  dispatch({
    type: LIGHT_YELLOW
  })
}

export const turnLightsToGreen = dispatch => () => {
  dispatch({
    type: LIGHT_GREEN
  })
}
import {INC_COUNTER, SUB_COUNTER} from 'actions/types'

// Dispatch increment value
export const incCounter = () => {
  return dispatch => dispatch({
      type: INC_COUNTER,
    })
}

// Dispatch subtract value
export const subCounter = () => {
  return (dispatch) => dispatch({
    type: SUB_COUNTER,
  })
}

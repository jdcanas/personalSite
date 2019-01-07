import { DIRECTION_PRESSED } from '../actions';
import directionPressed from './directionPressed';

const initialState = {
    direction: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
      case DIRECTION_PRESSED:
        return directionPressed(state, action);
      default:
        return state;
    }
}

export default reducer;
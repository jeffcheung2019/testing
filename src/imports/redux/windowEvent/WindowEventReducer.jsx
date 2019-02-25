import * as windowEventActions from "imports/redux/windowEvent/WindowEventActions";
import _assign from "lodash/assign";

const initState = {
  windowSize: {
    width: 0,
    height: 0,
    isMobile: false
  }
}


export const windowEventReducer = (state = initState, action) => {
   switch (action.type) {
     case windowEventActions.SYNC_WINDOW_SIZE:
      return _assign({}, state, {windowSize: action.windowSize});
     default:
      return state;
   }

}

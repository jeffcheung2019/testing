export const SYNC_WINDOW_SIZE = "SYNC_WINDOW_SIZE";
// export const RESIZE_TRIGGERED_AND_PASSED = "RESIZE_TRIGGERED_AND_PASSED";

export const syncWindowSize = (windowSize) => {
  return {
    type: SYNC_WINDOW_SIZE,
    windowSize: windowSize
  }
}

// export const windowSizeIsInSync = () => {
//   return {
//     type: RESIZE_TRIGGERED_AND_PASSED
//   }
// }

//async func

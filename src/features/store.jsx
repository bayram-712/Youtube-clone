import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./video/videoSlice";

const store = configureStore({
  reducer: {
    video: videoReducer,
  },
});

export default store;

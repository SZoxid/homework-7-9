import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/counterSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});

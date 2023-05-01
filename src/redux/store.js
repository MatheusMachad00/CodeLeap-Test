import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./userSlice";

export default configureStore({
  reducer: { username: usernameReducer },
});

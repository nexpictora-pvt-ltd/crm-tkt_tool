import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import {servicePreviewReducer} from "./preview/servicePreview.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  previewService: servicePreviewReducer,
});

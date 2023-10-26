import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import {servicePreviewReducer} from "./preview/servicePreview.reducer";
import { loginReducer } from "./login/login.reducer";
import { profileReducer } from "./profile/profile.reducer";



export const rootReducer = combineReducers({
  user: userReducer,
  previewService: servicePreviewReducer,
  login: loginReducer,
  profile: profileReducer
});

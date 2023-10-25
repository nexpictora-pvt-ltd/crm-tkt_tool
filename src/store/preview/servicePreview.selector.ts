import { RootState } from "../store";
// import {  } from "./profile.state";
import { ServiceState } from "./servicePreview.state";


export const servicePreviewSelector = (state: RootState): ServiceState =>
  state.previewService;
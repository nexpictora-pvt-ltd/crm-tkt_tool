
import { RootState } from "../store";
import { ServiceState } from "./servicePreview.state";


export const servicePreviewSelector = (state: RootState): ServiceState =>
  state.previewService;
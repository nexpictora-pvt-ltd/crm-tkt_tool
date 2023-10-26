/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINTS, axiosCall } from "../apiConfig";
export const getServicePreview = async (token: string): Promise<any> => {
  return await axiosCall({
    method: "GET",
    url: API_ENDPOINTS.getPreviewInfo,
    bearerToken: token,
  });
};

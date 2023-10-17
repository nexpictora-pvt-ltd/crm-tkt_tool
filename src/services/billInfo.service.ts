import { API_ENDPOINTS, axiosCall } from "../apiConfig";


export const getViewBillInfo = async (requestData: any) => {
  return await axiosCall(requestData, API_ENDPOINTS.getViewBillInfo);
};

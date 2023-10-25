import { API_ENDPOINTS, axiosCall } from "../apiConfig";
export const getServicePreview = async (token:string): Promise<any> => {
  return await axiosCall({method:'GET', url: API_ENDPOINTS.getPreviewInfo, bearerToken:token});
  console.log("--------------------------Calling the API--------------------------")
};
// export const getAccountPersonInfo = async (requestData: any): Promise<any> => {
//   return await axiosCall(requestData, API_ENDPOINTS.getPreviewInfo);
// };
import { API_ENDPOINTS, axiosCall } from "../apiConfig";
export const getServiceLogin = async (request: unknown): Promise<unknown> => {
  return await axiosCall({
    method: "POST",
    body: request,
    url: API_ENDPOINTS.getLoginDetails,
    withCredentials : false
  });
};


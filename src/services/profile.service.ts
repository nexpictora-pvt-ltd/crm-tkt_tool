import { API_ENDPOINTS, axiosCall } from "../apiConfig";

export const getServiceProfile = async (token: string): Promise<unknown> => {
  return await axiosCall({
    method: "GET",
    url: API_ENDPOINTS.getUserDetails,
    bearerToken: token,
  });
};

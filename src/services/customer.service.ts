import { API_ENDPOINTS, axiosCall } from "../apiConfig";
export const getCustomer = async (token: string): Promise<unknown> => {
  return await axiosCall({
    method: "GET",
    url: API_ENDPOINTS.getCustomerDetails,
    bearerToken: token,
    withCredentials : false

  });
};

// login.service.ts

import { API_ENDPOINTS, axiosCall } from "../apiConfig";

export const getServiceProfile = async (token: string, user_id: string): Promise<unknown> => {
  const url = API_ENDPOINTS.getUserDetails.replace("{user_id}", user_id);

  console.log(user_id);

  return await axiosCall({
    method: "GET",
    url,
    bearerToken: token,
  });
};

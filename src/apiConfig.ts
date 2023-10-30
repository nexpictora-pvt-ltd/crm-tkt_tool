
import axios, { AxiosResponse, Method } from "axios";

export const API_BASE_URL = "https://cnx-backend-dev-fcct.1.sg-1.fl0.io";
// export const API_BASE_URL = "http://192.168.0.101:8080";

export const API_ENDPOINTS = {
  getPreviewInfo: `/services/preview`,
  getLoginDetails: `/users/login`,
  getUserDetails: `/users/{user_id} `,
  getCustomerDetails:`/users/all`
};

interface RequestOptions<T> {
  method: Method;
  url: string;
  body?: T;
  params?: { [key: number]: number | number };
  bearerToken?: string;
}

export const axiosCall = async <T, R>(
  options: RequestOptions<T>
): Promise<R> => {
  try {
    const { method, url, body, params, bearerToken } = options;
    
    console.log("API Request URL:", url);
    
    const headers: { [key: string]: string } = {};
    if (bearerToken) {
      headers["Authorization"] = `Bearer ${bearerToken}`;
    }

    console.log("API Request Headers:", headers);
    console.log("API Request Data:", body);
    console.log("API Request Params:", params);

    const response: AxiosResponse<R> = await axios({
      url: `${API_BASE_URL}${url}`,
      method: method,
      headers: headers,
      data: body,
      params: params,
    });

    console.log("API Response Data:", response.data);

    return response.data;
  } catch (error) {
    // Handle errors according to your use case
    console.error("API Request Error:", error);
    throw error;
  }
};

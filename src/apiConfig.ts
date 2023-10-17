import axios, {  AxiosResponse } from "axios";
import { Buffer } from "buffer";

export const API_BASE_URL = process.env.REACT_APP_BASEURL;


export const API_ENDPOINTS = {
  getAccountList: `${API_BASE_URL}/accountList/getAccountList`,
  getViewBillInfo: `${API_BASE_URL}/BillInfo/getViewBillInfo`,
  getAccountPersonInfo: `${API_BASE_URL}/account/getAccountPersonInfo`,
  getBillAndPaymentHistory: `${API_BASE_URL}/paymentHistory/getBillAndPaymentHistory`

};

export const API_AUTHORIZATION_HEADER = {
  Authorization: `Basic ${Buffer.from(
    `${process.env.REACT_APP_C2MUSER}:${process.env.REACT_APP_C2MPASSWORD}`
  ).toString("base64")}`,
};

export const axiosCall = async <T, R>(request: T, url: string): Promise<R> => {
  try {
    console.log("API Request URL:", url);
    console.log("API Request Headers:", API_AUTHORIZATION_HEADER);
    console.log("API Request Data:", request);

    const response: AxiosResponse<R> = await axios({
      url: url,
      method: "POST",
      headers: API_AUTHORIZATION_HEADER,
      data: request,
    });

    console.log("API Response Data:", response.data);

    return response.data;
  } catch (error) {
    // console.error("API Request Error:", error);
    throw error;
  }
};
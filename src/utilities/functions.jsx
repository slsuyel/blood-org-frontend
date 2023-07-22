import axios from 'axios';
import { baseUrl } from '../baseurl/BaseUrl';
export const callApi = async (method, url, dataObj = [], headers = {}) => {
  try {
    headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    const response = await axios({
      method: method,
      url: `${baseUrl}${url}`,
      data: dataObj,
      headers: headers
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      console.error('Error making API call:', error);
      return null;
    }
  }
};



export const sumTwoNumbers = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Both inputs must be numbers.');
  }

  return num1 + num2;
};

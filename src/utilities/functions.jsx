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
    // console.log(response);
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



export const getName = (array, value) => {
  const name = array.find(d => d.id === value);
  return name.bn_name;
};

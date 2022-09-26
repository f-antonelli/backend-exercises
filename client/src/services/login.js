import axios from 'axios';
import { API_LOCAL } from './config';

const fromApiResponse = apiResponse => {
  const { data = [] } = apiResponse;

  return data;
};

const apiLogin = async user => {
  const apiURL = `${API_LOCAL}/api/users/login`;

  return await axios
    .post(apiURL, user)
    .catch(function (error) {
      console.log(error);
    })
    .then(fromApiResponse);
};

export default apiLogin;

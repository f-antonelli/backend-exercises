import axios from 'axios';
import { API_LOCAL } from './config';

const createUser = async (user) => {
  const apiURL = `${API_LOCAL}/api/users/signup`;

  return await axios
    .post(apiURL, user)
    .catch(function (error) {
      console.log(error);
    })
    .then(res => console.log(res.data.message));
};

export default createUser;

import axios from 'axios';

const addToCart = async (id, product) => {
  const apiURL = `http://localhost:8080/api/cart/${id}/products`;

  return await axios
    .post(apiURL, { product })
    .catch(function (error) {
      console.log(error);
    })
    .then(res => console.log(res.data.message));
};

export default addToCart;

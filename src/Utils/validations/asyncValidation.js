import axios from "axios";
const URL = "http://localhost:3001";

export const validateEmail = async email => {
  try {
    const res = await axios.get(`${URL}/validateEmail`, {
      params: { email: email }
    });
    return res;
  } catch (error) {
      console.log(error)
    return error;
  }
};

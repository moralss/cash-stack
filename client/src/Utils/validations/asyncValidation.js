import axios from "axios";
const URL = "http://localhost:3001";

export const validateEmail = async email => {
  try {
    const res = await axios.get(`${URL}/api/validateEmail`, {
      params: { email: email }
    });

    console.log("show", res);
    return res;
  } catch (error) {
    console.log(error)
    return error;
  }
};


export const checkConfirmation = async details => {
  try {
    const res = await axios.post(`${URL}/api/check-confirmation/`, details)
    console.log("details", res)
    return res
  } catch (e) {
    console.log(e)
  }
}

import axios from "axios";
const URL = "/api"

export const validateEmail = async email => {
  try {
    const res = await axios.get(`${URL}/validateEmail`, {
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
    const res = await axios.post(`${URL}/check-confirmation/`, details)
    console.log("details", res)
    return res
  } catch (e) {
    console.log(e)
  }
}

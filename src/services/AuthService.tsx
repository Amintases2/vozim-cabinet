import axios from "axios";
import Cookies from "universal-cookie";

class UserServices {
  cookies = new Cookies();

  getHeaders() {
    const token = this.cookies.get("token");
    return {
      Authorization: `Token ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  authPhone(phone: string) {
    const url = "https://apps-test2.gruzgruz.com/api/v1/client/auth/b2c/login";
    return axios.post(url, { phone: phone });
  }

  authCode(phone: string, code: string) {
    const url =
      "https://apps-test2.gruzgruz.com/api/v1/client/auth/b2c/smsConfirm";
    return axios.post(url, {
      phone: phone,
      code: code,
    });
  }

  authName(name: string) {
    const url =
      "https://apps-test2.gruzgruz.com/api/v1/client/auth/b2c/register";
    const headers = this.getHeaders();
    return axios.post(url, { name: name }, { headers });
  }
}

export default new UserServices();

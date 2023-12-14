import axios from "axios";
import Cookies from "universal-cookie";

class UserServices {
  cookies = new Cookies();
  private URL = "https://apps-test2.gruzgruz.com/api/v1/client/auth/b2c";

  getHeaders() {
    const token = this.cookies.get("token");
    return {
      Authorization: `Token ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  async authTest(phone) {
    console.log(phone);
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    return await axios.get(url);
  }
  async authTest2(phone, code) {
    console.log(phone, code);
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    return await axios.get(url);
  }

  async authPhone(phone: string) {
    const url = `${this.URL}/login`;
    return await axios.post(url, { phone: phone });
  }

  async authCode(phone: string, code: string) {
    const url = `${this.URL}/smsConfirm`;
    return await axios.post(url, {
      phone: phone,
      code: code,
    });
  }

  async authName(name: string) {
    const url = `${this.URL}/register`;
    const headers = this.getHeaders();
    return await axios.post(url, { name: name }, { headers });
  }
}

export default new UserServices();

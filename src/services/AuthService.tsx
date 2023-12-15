import axios from "axios";
import Cookies from "universal-cookie";

class UserServices {
  cookies = new Cookies();
  private URL = "https://apps-test0.gruzgruz.com/api/v1/client/auth/b2c";

  getHeaders() {
    const token = this.cookies.get("token");
    return {
      Authorization: `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  // async authTest(phone) {
  //   console.log(phone);
  //   const url = "https://jsonplaceholder.typicode.com/todos/1";
  //   return await axios.get(url);
  // }
  //
  // async authTest2(phone, code) {
  //   console.log(phone, code);
  //   const url = "https://jsonplaceholder.typicode.com/todos/1";
  //   return await axios.get(url);
  // }

  async authPhone(phone: string) {
    // const data = {
    //   phone: phone,
    // }
    const url = `${this.URL}/login?phone=${phone}`;
    return await axios.post(url);
  }

  async authCode(phone: string, code: string) {
    // const data = {
    //   phone: phone,
    //   code: code,
    // }
    const url = `${this.URL}/smsConfirm?phone=${phone}&code=${code}`;
    return await axios.post(url);
  }

  async authRecode(phone: string) {
    // const data = {
    //   phone: phone,
    //   code: code,
    // }
    const url = `${this.URL}/smsResend?phone=${phone}`;
    return await axios.post(url);
  }

  async authName(name: string) {
    // const data = {name: name}
    const url = `${this.URL}/register?name=${name}`;
    const headers = this.getHeaders();
    return await axios.post(url, {}, {headers: headers});
  }
}

export default new UserServices();

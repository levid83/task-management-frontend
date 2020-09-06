import HttpService from "./http.service";

type UserCredentials = {
  username: string;
  password: string;
};

export default class AuthService extends HttpService {
  async signin(credentials: UserCredentials) {
    const result = (await this.post(`auth/signin`, credentials, {}, true)) as {
      data: { accessToken: string; username: string };
    };
    const accessToken = result.data.accessToken;
    this.saveToken(accessToken);
    return result.data.username;
  }

  async signup(credentials: UserCredentials) {
    await this.post(`auth/signup`, credentials, {}, true);
  }

  async signout() {
    this.removeToken();
  }
}

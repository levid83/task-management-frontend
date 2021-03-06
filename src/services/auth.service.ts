import HttpService from "./http.service";
import { UserCredentials } from "../types";

export default class AuthService extends HttpService {
  async signin(credentials: UserCredentials) {
    const result = (await this.post(`auth/signin`, credentials, {}, true)) as {
      data: { accessToken: string; username: string };
    };
    const accessToken = result.data.accessToken;
    this.tokenService.saveToken(accessToken);
    return result.data.username;
  }

  async signup(credentials: UserCredentials) {
    await this.post(`auth/signup`, credentials, {}, true);
  }

  async checkAuth() {
    return this.get(`auth/check-auth`);
  }

  async signout() {
    this.tokenService.removeToken();
  }
}

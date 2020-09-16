import jwt from "jsonwebtoken";

export default class TokenService {
  _accessToken: string | null = null;

  get accessToken(): string | null {
    return this._accessToken ? this._accessToken : this.loadToken();
  }

  saveToken(accessToken: string): void {
    this._accessToken = accessToken;
    return localStorage.setItem("accessToken", accessToken);
  }

  loadToken(): string | null {
    const token = localStorage.getItem("accessToken");
    this._accessToken = token;
    return token;
  }

  loadTokenPayload(): { username: string; isAuthenticated: boolean } {
    const token = this.loadToken();
    if (!token)
      return {
        username: "",
        isAuthenticated: false,
      };
    const decodedToken = jwt.decode(token) as {
      username: string | null;
      exp: number;
    };
    return {
      username: decodedToken.username ? decodedToken.username : "",
      isAuthenticated: decodedToken && decodedToken.exp > Date.now() / 1000,
    };
  }

  removeToken(): void {
    localStorage.removeItem("accessToken");
  }
}

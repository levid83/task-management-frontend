import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "../config";

export default class HttpService {
  _accessToken: string | null = null;

  constructor(private baseURL: string = BASE_URL) {}

  async get(
    endpoint: string,
    options = {},
    noAuth: boolean = false
  ): Promise<AxiosResponse<any> | void> {
    try {
      return axios.get(`${this.baseURL}/${endpoint}`, {
        ...options,
        ...(noAuth ? {} : this._getAuthHeader()),
      });
    } catch (error) {
      this._handleHttpError(error);
    }
  }

  async post(
    endpoint: string,
    data = {},
    options = {},
    noAuth: boolean = false
  ): Promise<AxiosResponse<any> | void> {
    try {
      return axios.post(`${this.baseURL}/${endpoint}`, data, {
        ...options,
        ...(noAuth ? {} : this._getAuthHeader()),
      });
    } catch (error) {
      this._handleHttpError(error);
    }
  }

  async delete(
    endpoint: string,
    options = {},
    noAuth: boolean = false
  ): Promise<void> {
    try {
      await axios.delete(`${this.baseURL}/${endpoint}`, {
        ...options,
        ...(noAuth ? {} : this._getAuthHeader()),
      });
    } catch (error) {
      this._handleHttpError(error);
    }
  }

  async patch(
    endpoint: string,
    data = {},
    options = {},
    noAuth: boolean = false
  ): Promise<AxiosResponse<any> | void> {
    try {
      return axios.patch(`${this.baseURL}/${endpoint}`, data, {
        ...options,
        ...(noAuth ? {} : this._getAuthHeader()),
      });
    } catch (error) {
      this._handleHttpError(error);
    }
  }

  _handleHttpError(error: AxiosError): void {
    const { code } = error;

    if (code !== "401") {
      throw error;
    } else {
      return this._handle401();
    }
  }

  _handle401(): void {
    // redirect to signin
  }

  _getAuthHeader() {
    const token = this.loadToken();

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

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

  removeToken(): void {
    localStorage.removeItem("accessToken");
  }
}

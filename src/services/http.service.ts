import axios, { AxiosError, AxiosResponse } from "axios";

import TokenService from "./token.service";

export default class HttpService {
  constructor(
    protected tokenService: TokenService = new TokenService(),
    private baseURL: string = process.env.REACT_APP_BASE_URL as string
  ) {}

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
    const token = this.tokenService.loadToken();

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
}

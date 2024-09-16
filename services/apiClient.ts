import axios, { AxiosRequestConfig } from "axios";

const axiosInstanse = axios.create({
  baseURL: "https://api.mockfly.dev/mocks/76aee9c2-52cc-455f-a37f-df519ec6ab06",
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstanse.get<T>(this.endpoint, config).then((res) => res.data);
  };
}

export default ApiClient;

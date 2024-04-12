import { JS_BUNDLE_VERSION } from "@/constants/appconfig";
import { API_BASE_URL } from "@/constants/endpoint";
import axios from "axios";

const http = axios.create({
  baseURL: API_BASE_URL ? "/api" : "/api",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-JS-Version": JS_BUNDLE_VERSION,
  },
});

// Change request data/error here
http.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (config: any) => {
    // const token = await getToken();
    // config.headers = {
    //   ...config.headers,
    //   Authorization: `Bearer ${token ? token : ""}`,
    // };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;

import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export default api;

const maxRetryRefresh = 5;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalReq = error.config;

    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    if ((error.response.status = 401)) {
      originalReq._retryCount = originalReq._retryCount || 0;

      if (originalReq._retryCount >= maxRetryRefresh) {
        window.location.href = "/login";
      }

      originalReq._retryCount += 1;
      try {
        await axios.get("http://localhost:5000/api/auth/refresh", {
          withCredentials: true,
        });

        return api(originalReq);
      } catch (error) {
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
  },
);

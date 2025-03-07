import axios, { AxiosInstance } from "axios";
import { redirect } from "next/navigation";

const api: AxiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export default api;

const maxRetryRefresh = 5;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalReq = error.config;

    if ((error.response.status = 401)) {
      originalReq._retryCount = originalReq._retryCount || 0;

      if (originalReq._retryCount >= maxRetryRefresh) {
        redirect("/login");
      }

      originalReq._retryCount += 1;
      try {
        await api.get("/auth/refresh");

        return api(originalReq);
      } catch (error) {
        redirect("/login");
      }
    }
    return Promise.reject(error);
  },
);

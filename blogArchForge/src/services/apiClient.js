import axios from "axios";
import conf from "../conf/conf";


const apiClient = axios.create({
  baseURL: conf.apiEndpoint || "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});


apiClient.interceptors.request.use(
  (config) => {
    const sessionUser = localStorage.getItem("session_user");
    if (sessionUser) {
      try {
        const { token } = JSON.parse(sessionUser);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (err) {
        console.error("Error parsing session user from localStorage", err);
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);


apiClient.interceptors.response.use(
  (response) => {

    return response.data;
  },
  (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      // Session expired or token invalid
      console.warn("Unauthorized: Session expired. Redirecting to login...");
      localStorage.removeItem("session_user");
      window.location.href = "/login";
    } else if (status === 403) {
      console.error("Forbidden: You do not have permission to access this resource.");
    } else if (status >= 500) {
      console.error("Server error encountered. Please try again later.");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
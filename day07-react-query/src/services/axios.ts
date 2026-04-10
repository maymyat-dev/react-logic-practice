import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === "ERR_NETWORK") {
        toast.error("Network error. Please check your internet connection and try again.");
        return Promise.reject(error);
    }
    if (error.response) {
      const status = error.response.status;
        if (status === 401) {
            
            toast.error("Unauthorized. Please log in again.");
          localStorage.removeItem("token");
          window.location.href = "/login";
        
      } else if (status === 403) {
        toast.error("Forbidden. You do not have permission to access this resource.");
      } else if (status === 404) {
        toast.error("Not Found. The requested resource could not be found.");
      } else if (status >= 500) {
        toast.error("Server error. Please try again later.");
      }
    } else {
      toast.error("An unexpected error occurred. Please try again.");
    }
    return Promise.reject(error);
  },
);

export default api;

// api.js
import axios from 'axios';

// Base API URL
const API_URL = 'https://crm-campaign-management-app.onrender.com/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Interceptor to attach Firebase token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('firebaseToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('Authorization Header:', config.headers.Authorization); // Debug header
    } else {
      console.warn('Firebase token not found in localStorage');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export individual API functions
export const fetchCampaigns = () => axiosInstance.get('/campaigns');

export const createCampaign = (data) => axiosInstance.post('/campaign', data);

export const sendMessages = (campaignId) => axiosInstance.post(`/campaign/${campaignId}/send`);

export const updateDeliveryReceipt = (logId) => axiosInstance.post(`/communication/${logId}/receipt`);

export default axiosInstance;
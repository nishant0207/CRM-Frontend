import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Interceptor to attach Firebase token to every request
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('firebaseToken'); // Fetch token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Attach token to Authorization header
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Export individual API functions
export const fetchCampaigns = () => axiosInstance.get('/campaigns');
export const createCampaign = (data) => axiosInstance.post('/campaign', data);
export const sendMessages = (campaignId) => axiosInstance.post(`/campaign/${campaignId}/send`);
export const updateDeliveryReceipt = (logId) => axiosInstance.post(`/communication/${logId}/receipt`);
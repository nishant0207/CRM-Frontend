import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const fetchCampaigns = () => axios.get(`${API_URL}/campaigns`);

export const createCampaign = (data) => axios.post(`${API_URL}/campaign`, data);

export const sendMessages = (campaignId) => axios.post(`${API_URL}/campaign/${campaignId}/send`);

export const updateDeliveryReceipt = (logId) => axios.post(`${API_URL}/communication/${logId}/receipt`);
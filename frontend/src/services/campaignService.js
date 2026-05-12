import axios from 'axios';

const API_URL = 'http://localhost:8000/campaign';

export const generateCampaign = async (campaignData) => {
  try {
    const response = await axios.post(`${API_URL}/generate`, campaignData);
    return response.data;
  } catch (error) {
    console.error('Error generating campaign:', error);
    throw error;
  }
};

import axios from 'axios';

const baseUrl = process.env.API_BASE_URL;

export const loginRequest = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password });
    const { user } = response.data;
    return user;
  } catch (error) {
    throw new Error('Invalid credentials. Please try again.');
  }
};

export const logoutRequest = async () => {
  try {
    await axios.post(`${baseUrl}/logout`);
  } catch (error) {
    throw new Error('Error logging out. Please try again.');
  }
};

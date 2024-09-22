import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      return response.data.user;
    }
  } catch (error) {
    console.error('Login error:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'An error occurred during login');
  }
};

export const logout = async () => {
  try {
    await axios.post(`${API_URL}/logout`, null, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    localStorage.removeItem('token');
  } catch (error) {
    console.error('Logout error:', error.response?.data?.message || error.message);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    return response.data;
  } catch (error) {
    console.error('Get current user error:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'An error occurred while fetching user data');
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  } catch (error) {
    console.error('Forgot password error:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'An error occurred while requesting password reset');
  }
};

export const forgotUsername = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-username`, { email });
    return response.data;
  } catch (error) {
    console.error('Forgot username error:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'An error occurred while requesting username recovery');
  }
};

export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, { token, newPassword });
    return response.data;
  } catch (error) {
    console.error('Reset password error:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'An error occurred while resetting password');
  }
};

export const register = async (username, email, password) => {
  try {
    console.log('Attempting to register with:', { username, email });
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    console.log('Registration response:', response.data);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      return response.data.user;
    } else {
      throw new Error('No token received from server');
    }
  } catch (error) {
    console.error('Registration error:', error);
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw new Error(error.response?.data?.message || error.message || 'An error occurred during registration');
  }
};


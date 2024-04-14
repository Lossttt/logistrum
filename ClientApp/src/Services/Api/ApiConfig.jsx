import axios from 'axios';

const BASE_URL = 'https://localhost:7016/api';

// Create Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request:', config);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for logging and error handling
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    return response.data;
  },
  (error) => {
    console.error('Response error:', error.response || error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status, data } = error.response;
      console.error('Status:', status);
      console.error('Error data:', data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request setup error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Function to make API calls
async function makeApiCall(endpoint, method, { body = null, headers = {}, queryParams = {} } = {}) {
  const options = {
    method,
    headers,
    params: queryParams,
    data: body,
  };

  try {
    const response = await axiosInstance(endpoint, options);
    return response;
  } catch (error) {
    throw error;
  }
}

// Function to make a GET request
async function get(endpoint, queryParams = {}, headers = {}) {
  try {
    return await makeApiCall(endpoint, 'GET', { queryParams, headers });
  } catch (error) {
    throw error;
  }
}

// Function to make a POST request
async function post(endpoint, body, headers = {}) {
  try {
    return await makeApiCall(endpoint, 'POST', { body, headers });
  } catch (error) {
    throw error;
  }
}

// Function to make a PUT request
async function put(endpoint, body, headers = {}) {
  try {
    return await makeApiCall(endpoint, 'PUT', { body, headers });
  } catch (error) {
    throw error;
  }
}

// Function to make a DELETE request
async function del(endpoint, headers = {}) {
  try {
    return await makeApiCall(endpoint, 'DELETE', { headers });
  } catch (error) {
    throw error;
  }
}

// Export the functions
export { makeApiCall, get, post, put, del };

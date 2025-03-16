// src/api/client.ts
import axios, { AxiosInstance } from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number;
}

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export const fetchData = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    console.log(`Attempting to fetch from: ${apiClient.defaults.baseURL}${endpoint}`);
    const response = await apiClient.get<T>(endpoint);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error('Unknown error occurred');
  }
};
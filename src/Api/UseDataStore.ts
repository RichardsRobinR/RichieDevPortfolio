// src/stores/useDataStore.ts
import { create } from 'zustand';
import { fetchData } from './Client';

interface DataState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
  fetchData: (endpoint: string) => Promise<void>;
  clearData: () => void;
}

export const useDataStore = create<DataState<unknown>>((set) => ({
  data: null,
  loading: false,
  error: null,
  lastFetched: null,

  fetchData: async (endpoint: string) => {
    try {
      set({ loading: true, error: null });
      
      // Cache for 5 minutes
      const now = Date.now();
      if (useDataStore.getState().lastFetched && now - useDataStore.getState().lastFetched! < 300000) {
        return;
      }

      const response = await fetchData(endpoint);
      
      set({
        data: response.data,
        loading: false,
        lastFetched: now,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Unknown error',
        loading: false,
      });
    }
  },

  clearData: () => set({ data: null, lastFetched: null }),
}));
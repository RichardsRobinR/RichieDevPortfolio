// src/components/DataComponent.tsx
import { JSX, useEffect } from 'react';
import { useDataStore } from './UseDataStore';

interface DataComponentProps<T> {
  endpoint: string;
  render: (data: T) => JSX.Element;
  loadingFallback?: JSX.Element;
  errorFallback?: (error: string) => JSX.Element;
}

const DataComponent = <T,>({
  endpoint,
  render,
  loadingFallback = <div>Loading...</div>,
  errorFallback = (error) => <div>Error: {error}</div>,
}: DataComponentProps<T>) => {
  const { data, loading, error, fetchData } = useDataStore();

  useEffect(() => {
    fetchData(endpoint);
  }, [endpoint, fetchData]);

  if (loading) return loadingFallback;
  if (error) return errorFallback(error);
  if (!data) return <div>No data available</div>;

  return render(data as T);
};

export default DataComponent;
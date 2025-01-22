import axios, { Method, AxiosRequestConfig, AxiosError } from "axios";
import { useCallback, useState } from "react";
import { serverAxiosInstance } from "../api/server/axios-instence";

export interface Props<TRequest extends AxiosRequestConfig> {
  url: string;
  method: Method;
  data?: TRequest["data"]; // Use data from TRequest
}

interface ReturnedTypes<TResponse> {
  fetchData: () => void;
  data: TResponse | null;
  error: unknown | null;
  loading: boolean;
}

export const useAppRequest = <TRequest extends AxiosRequestConfig, TResponse>(requestConfig: Props<TRequest>): ReturnedTypes<TResponse> => {
  const [data, setData] = useState<TResponse | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await serverAxiosInstance(requestConfig);
      setData(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err?.response?.data) setError(err.response.data);
      } else setError(err);
    } finally {
      setLoading(false);
    }
  }, [requestConfig]);

  return { fetchData, data, error, loading };
};

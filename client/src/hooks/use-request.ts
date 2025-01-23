import { Method, AxiosRequestConfig, AxiosError } from "axios";
import { useCallback, useState } from "react";
import { serverAxiosInstance } from "../api/server/axios-instence";

export interface Props<TRequest extends AxiosRequestConfig> {
  url: string;
  method: Method;
  data?: TRequest["data"];
}

interface ReturnedTypes<TResponse> {
  fetchData: <TRequest extends AxiosRequestConfig>(requestConfig: Props<TRequest>) => Promise<TResponse | undefined>;
  data: TResponse | null;
  error: unknown | null;
  loading: boolean;
}

export const useAppRequest = <TResponse>(): ReturnedTypes<TResponse> => {
  const [data, setData] = useState<TResponse | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async <TRequest extends AxiosRequestConfig>(requestConfig: Props<TRequest>): Promise<TResponse | undefined> => {
    try {
      setLoading(true);
      const response = await serverAxiosInstance(requestConfig);
      setData(response.data);
      return response.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err?.response?.data) setError(err.response.data);
      } else setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchData, data, error, loading };
};

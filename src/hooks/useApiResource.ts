import { useCallback, useEffect, useState } from "react";

interface ApiResourceState<T> {
  data: T | null;
  isLoading: boolean;
  errorMessage: string | null;
  refetch: () => void;
}

export const useApiResource = <T>(
  fetcher: () => Promise<T>,
): ApiResourceState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState<number>(0);

  const refetch = useCallback(() => {
    setReloadKey((currentKey) => currentKey + 1);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadResource = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const resource = await fetcher();
        if (!isMounted) {
          return;
        }
        setData(resource);
      } catch (error) {
        if (!isMounted) {
          return;
        }
        const message =
          error instanceof Error ? error.message : "Unexpected API error";
        setErrorMessage(message);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadResource();

    return () => {
      isMounted = false;
    };
  }, [fetcher, reloadKey]);

  return { data, isLoading, errorMessage, refetch };
};

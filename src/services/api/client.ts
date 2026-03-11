const DEFAULT_API_BASE_URL = "http://localhost:3000";

const getBaseUrl = (): string => {
  const url = import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL;
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

export class ApiRequestError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiRequestError";
    this.status = status;
  }
}

export const requestJson = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${getBaseUrl()}${endpoint}`);

  if (!response.ok) {
    const fallbackMessage = `Request failed with status ${response.status}`;
    throw new ApiRequestError(fallbackMessage, response.status);
  }

  return (await response.json()) as T;
};

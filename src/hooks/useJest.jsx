import { useQuery } from "react-query";

const useJest = (id) => {
  const { data, error, isLoading } = useQuery(
    ["jest", id], // Unique key for the query
    () => id ? `https://nslovar.cnii-jest.ru/api/jests/${id}` : null, // Query function
    {
      enabled: !!id, // Enable the query only when `id` is truthy
      retry: false, // Disable automatic retry
      refetchOnWindowFocus: false, // Disable refetching on window focus
      refetchOnReconnect: false, // Disable refetching on reconnect
    }
  );

  return { data, error, isLoading };
};

export default useJest;

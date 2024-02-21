import { useQuery } from "react-query";
import axios from "axios";

const useJest = (id) => {
  const { data, error, isLoading } = useQuery(
    ["jest", id], // Unique key for the query
    () => (id ? fetchJest(id) : null), // Query function
    {
      enabled: !!id, // Enable the query only when `id` is truthy
      retry: false, // Disable automatic retry
      refetchOnWindowFocus: false, // Disable refetching on window focus
      refetchOnReconnect: false, // Disable refetching on reconnect
    }
  );

  return { data, error, isLoading };
};

async function fetchJest(id) {
  try {
    const response = await axios.get(`https://nslovar.cnii-jest.ru/api/jests/${id}`);
    return response.data;
  } catch (error) {
    // If the error response is available, throw it
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, throw a generic error message
      throw new Error("Network response was not ok");
    }
  }
}

export default useJest;

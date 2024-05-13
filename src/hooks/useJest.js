import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiUrl = import.meta.env.BASE_URL;
const fetchJest = async (jestID) => {
  try {
    const response = axios.get(`${apiUrl}/${jestID}`);
    const jest = response.data;
    return jest;
  } catch (error) {
    throw new Error("Failed to fetch jest");
  }
};

const useJest = (jestID) => {
  return useQuery({
    queryKey: ["jest", jestID],
    queryFn: () => fetchJest(jestID),
    enabled: !!jestID,
  });
};

export default useJest;

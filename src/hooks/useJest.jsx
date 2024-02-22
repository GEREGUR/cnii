import axios from "axios";
import { useQuery } from "react-query";

const fetchGesture = async (id) => {

  try {
    const { data } = await axios.get(`https://nslovar.cnii-jest.ru/api/jests/${id}`);
  
  return data;
  } catch (error) {
    console.log(error)
  }
  
};

const useJest = (id) => {
    const {
      data,
      isLoading,
      isError,
      error,
    } = useQuery("gesture", () => fetchGesture(id))
  return {data, isLoading, isError, error}
}

export default useJest
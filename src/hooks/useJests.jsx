import { useQuery } from "react-query";
import fetcher from "@/libs/fetcher"; // Assuming this path is correct

const usePosts = () => {
  const { data, error, isLoading } = useQuery("posts", fetcher, {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default usePosts;

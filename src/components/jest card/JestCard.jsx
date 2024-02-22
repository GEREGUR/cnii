import Details from "../details";
import VideoPlayer from "./jest card components/VideoPlayer";
import Smth from "./jest card components/Smth";
import Description from "./jest card components/Description";
import { useParams } from "react-router-dom";
import useJest from "@/hooks/useJest";
import { Loader2 } from "lucide-react";
import Header from "../header/Header";
// import axios from "axios";

// const fetchDescription = async () => {
//   const { data } = await axios.get("https://nslovar.cnii-jest.ru/api/jests");
//   return data;
// };



export default function JestCard() {
  let params = useParams(); 

  const { data: jest, isLoading, isError, error } = useJest(params.id);
  console.log(jest)

  if (!params.id) {
    return <div className="w-full h-full flex justify-center items-center">Выберите жест</div>
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-end gap-14">
        <Loader2 className="animate-spin text-[#3EA2FF]" />
        <Loader2 className="animate-spin text-[#3EA2FF]" />
        <Loader2 className="animate-spin text-[#3EA2FF]" />
      </div>
    );
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  // if (!jest || Object.keys(jest).length === 0) {
  //   return <div className="ml-4">No jest data found</div>;
  // }
  
  return (
    <div>
      <Header />
      <Details jest={jest}/>
      <div className="flex justify-end my-4">
        <Smth />
        <VideoPlayer />
      </div>
        <Description/>
    </div>
  )
}

import Details from "../details";
import VideoPlayer from "./jest card components/VideoPlayer";
import Smth from "./jest card components/Smth";
import Description from "./jest card components/Description";
// import axios from "axios";

// const fetchDescription = async () => {
//   const { data } = await axios.get("https://nslovar.cnii-jest.ru/api/jests");
//   return data;
// };


export default function JestCard() {
  return (
    <div>
      <Details />
      <div className="flex justify-end my-4">
        <Smth />
        <VideoPlayer />
      </div>
        <Description/>
    </div>
  )
}

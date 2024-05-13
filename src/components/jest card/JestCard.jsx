import { Details } from "../details";
import VideoPlayer from "./jest card components/VideoPlayer";
import Smth from "./jest card components/Smth";
import Description from "./jest card components/Description";
// import axios from "axios";

// const fetchDescription = async () => {
//   const { data } = await axios.get("https://nslovar.cnii-jest.ru/api/jests");
//   return data;
// };

export default function JestCard({ id }) {
  return (
    <div>
      <Details id={id} />
      <div className="my-4 flex justify-end">
        <Smth />
        <VideoPlayer />
      </div>
      <Description />
    </div>
  );
}

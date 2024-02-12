import JestCard from "../jest card/JestCard";
import Aside from "./aside/Aside";


export default function Home() {
  return (
    <div className="flex">
        <div>
            <Aside />
        </div>
        <div className="w-full">
            <JestCard />
        </div>
    </div>
  )
}

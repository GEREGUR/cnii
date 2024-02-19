import JestCard from "../jest card/JestCard";
import Aside from "./aside/Aside";
import { Filters } from "../filters";


export default function Home() {
  return (
    <div className="flex">
        <div>
            <Aside />
        </div>
        <main className="flex flex-col w-full">
          <div className="w-auto">
              <Filters />
          </div>
          <div className="w-auto mr-[14px]">
              <JestCard />
          </div>
        </main>
    </div>
  )
}

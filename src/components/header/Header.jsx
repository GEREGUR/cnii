import { cnii_logo } from "../../assets";
import { NavButtons } from "./navigation buttons/NavButtons";
import { NavDesktop } from "./navigation/NavDesktop";

export default function Header() {
  return (
    <div className="w-full bg-black flex flex-row justify-between px-6 py-2 relative">
      <div className="flex flex-col flex-nowrap w-[80%]">
        <h1 className="text-[#C1E1FF] w-full text-sm font-bold mb-2">
          <span className="text-xs font-normal">Электронная справочно-аналитическая система</span><br />
          Мультиязычной толковый лексикографический словарь жестового языка
        </h1>
        <div className="flex justify-start w-full items-center">
          <NavDesktop />
        </div>
      </div>
      <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex items-center">
        <a href="/">
          <img src={cnii_logo} alt="CNII Logo" />
        </a>
      </div>
      <div className="flex flex-row justify-end items-center w-[400px]">
        <NavButtons />
      </div>
    </div>
  );
}

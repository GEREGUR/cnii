import { hands1_icon, hands2_icon, hands3_icon, hands4_icon } from "@/assets";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Hands() {
  const [handsCount, setHandsCount] = useState(1);
  const [hand1, setHand1] = useState(false);
  const [hand2, setHand2] = useState(false);

  return (
    <div className="mx-auto mt-[10px] grid grid-cols-2 gap-[10px]">
      <button
        onClick={() => setHandsCount(1)}
        className={cn(
          "transition hover:bg-[#25445F]",
          handsCount === 1 && "bg-[#25445F] hover:opacity-50",
        )}
      >
        <img src={hands1_icon} alt="Одна рука" />
      </button>
      <button
        onClick={() => setHandsCount(2)}
        className={cn(
          "transition hover:bg-[#25445F]",
          handsCount === 2 && "bg-[#25445F] hover:opacity-50",
        )}
      >
        <img src={hands2_icon} alt="Две руки" />
      </button>
      <button
        onClick={() => {
          setHand1((prev) => !prev);
        }}
        className={cn(
          "transition hover:bg-[#25445F]",
          hand1 && "bg-[#25445F] hover:opacity-50",
        )}
      >
        <img src={hands3_icon} alt="Рука 1" />
      </button>
      <button
        onClick={() => {
          setHand2((prev) => !prev);
        }}
        className={cn(
          "transition hover:bg-[#25445F]",
          hand2 && "bg-[#25445F] hover:opacity-50",
        )}
      >
        <img src={hands4_icon} alt="Рука 2" />
      </button>
    </div>
  );
}

import { hands1_icon, hands2_icon, hands3_icon, hands4_icon } from "@/assets";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Hands() {
  const [hand1, setHand1] = useState(true);
  const [hand2, setHand2] = useState(false);
  const [hand3, setHand3] = useState(true);
  const [hand4, setHand4] = useState(false);

  return (
    <div className="mx-auto mt-[10px] grid grid-cols-2 gap-[10px]">
      <button
        onClick={() => setHand1((prev) => !prev)}
        className={cn(
          "transition hover:bg-[#25445F]",
          hand1 && "bg-[#25445F] hover:opacity-50",
        )}
      >
        <img src={hands1_icon} alt="Одна рука" />
      </button>
      <button
        onClick={() => setHand2((prev) => !prev)}
        className={cn(
          "transition hover:bg-[#25445F]",
          hand2 && "bg-[#25445F] hover:opacity-50",
        )}
      >
        <img src={hands2_icon} alt="Две руки" />
      </button>
      <button
        onClick={() => setHand3((prev) => !prev)}
        className={cn(
          "transition hover:bg-[#25445F]",
          hand3 && "bg-[#25445F] hover:opacity-50",
        )}
      >
        <img src={hands3_icon} alt="Рука 1" />
      </button>
      <button
        onClick={() => setHand4((prev) => !prev)}
        className={cn(
          "transition hover:bg-[#25445F]",
          hand4 && "bg-[#25445F] hover:opacity-50",
        )}
      >
        <img src={hands4_icon} alt="Рука 2" />
      </button>
    </div>
  );
}

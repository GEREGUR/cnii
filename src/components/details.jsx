import useJest from "@/hooks/useJest";
import { useParams } from "react-router";
import { Loader2 } from "lucide-react";

const Details = () => {
  const params = useParams();
  const jestId = String(params.jestId);
  const { data: jest, isLoading, isError, error } = useJest(jestId);

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

  if (!jest || Object.keys(jest).length === 0) {
    return <div className="ml-4">No jest data found</div>;
  }

  return (
    <div className="flex justify-between bg-black">
      <h1 className="w-1/5 truncate text-[#3EA2FF] pl-4 text-4xl">{jest.name}</h1>
      <div className="flex justify-end items-start pt-1 gap-4">
        <div className="flex justify-start h-auto items-start gap-4">
          <div className="flex flex-col justify-center items-start px-4 border border-[#58a6ff] rounded-lg dark:border-neutral-800 w-[160px] h-[50px]">
            <span className="text-[#c9d1d9] text-[10px]">Вид речи:</span>
            <span className="text-[#58a6ff] text-[13.33px] font-semibold">{jest?.speech_type?.name}</span>
          </div>
        </div>
        <div className="bg-black flex justify-start items-start gap-4">
          <div className="flex flex-col justify-center items-start px-4 border border-[#58a6ff] rounded-lg dark:border-neutral-800 w-[160px] h-[50px]">
            <span className="text-[#c9d1d9] text-[10px]">Актуальность:</span>
            <span className="text-[#58a6ff] text-[13.33px] font-semibold">{jest?.actual?.name}</span>
          </div>
        </div>
        <div className="bg-black flex justify-start items-start gap-4">
          <div className="flex flex-col justify-center items-start px-4 border border-[#58a6ff] rounded-lg dark:border-neutral-800 w-[160px] h-[50px]">
            <span className="text-[#c9d1d9] text-[10px]">Диалект:</span>
            <span className="text-[#58a6ff] text-[13.33px] font-semibold">{jest?.dialect?.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

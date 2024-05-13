const info = [
  {
    name: "Абажур",
    type: "Искаженный жест",
    actuality: "Современный",
    dialect: "Международный",
  },
];

export function Details() {
  return (
    <div className="flex justify-between bg-black">
      {info.map((jest) => (
        <h1 key={jest.name} className="w-1/5 pl-4 text-4xl text-[#BB093C]">
          {jest.name}
        </h1>
      ))}
      <div className="flex items-start justify-end gap-4 pt-1">
        <div className="flex h-auto items-start justify-start gap-4">
          {info.map((jest) => (
            <div
              key={jest.name}
              className="flex h-[50px] w-[160px] flex-col items-start justify-center rounded-lg border border-[#58a6ff] px-4 dark:border-neutral-800"
            >
              <span className="text-[10px] text-[#c9d1d9]">Вид речи:</span>
              <span className="text-[13.33px] font-semibold text-[#58a6ff]">
                {jest.type}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-start justify-start gap-4 bg-black">
          {info.map((jest) => (
            <div
              key={jest.name}
              className="flex h-[50px] w-[160px] flex-col items-start justify-center rounded-lg border border-[#58a6ff] px-4 dark:border-neutral-800"
            >
              <span className="text-[10px] text-[#c9d1d9]">Актуальность:</span>
              <span className="text-[13.33px] font-semibold text-[#58a6ff]">
                {jest.actuality}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-start justify-start gap-4 bg-black">
          {info.map((jest) => (
            <div
              key={jest.name}
              className="flex h-[50px] w-[160px] flex-col items-start justify-center rounded-lg border border-[#58a6ff] px-4 dark:border-neutral-800"
            >
              <span className="text-[10px] text-[#c9d1d9]">Диалект:</span>
              <span className="text-[13.33px] font-semibold text-[#58a6ff]">
                {jest.dialect}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { hands1_logo, hands2_logo, hands3_logo, hands4_logo } from "@/assets";

export default function Aside() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <aside className="h-[670px] w-[420px]">
      <div className="flex h-full">
        <div className="flex w-[232px] flex-col gap-[10px] bg-[#1B1D23] px-[15px]">
          <div className="mx-auto mt-[10px] grid grid-cols-2 gap-[10px]">
            <img
              src={hands1_logo}
              alt="Одна рука"
              className="cursor-pointer transition hover:opacity-50"
            />
            <img
              src={hands2_logo}
              alt="Две руки"
              className="cursor-pointer transition hover:opacity-50"
            />
            <img
              src={hands3_logo}
              alt="Рука 1"
              className="cursor-pointer transition hover:opacity-50"
            />
            <img
              src={hands4_logo}
              alt="Рука 2"
              className="cursor-pointer transition hover:opacity-50"
            />
          </div>
          <Input
            placeholder="Название жеста"
            className="border-none bg-[#303339] text-[#728796] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <ScrollArea className="h-[240px] rounded-md bg-[#303339]">
            <div className="flex flex-col">
              {posts.map((post) => (
                <a
                  href={`/${post.id}`}
                  className="max-w-[190px] cursor-pointer truncate px-2 py-[1.5px] text-[14px] leading-[17px] text-[#728796] transition hover:text-neutral-200"
                  key={post.id}
                >
                  {post.title}
                </a>
              ))}
            </div>
          </ScrollArea>
          <Button className="bg-[#1B75BB] text-[#C1E1FF]">Темы</Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div
                role="button"
                className="flex items-center justify-center rounded-md bg-[#303339] p-2 text-[14px] text-[#728796] transition hover:bg-neutral-900/90"
              >
                <ChevronDown className="mr-2 h-5 w-5" />
                Лексикон
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[216px] border-none bg-[#303339] text-[#728796]"
              align="center"
              alignOffset={8}
              forceMount
            >
              <DropdownMenuItem className="cursor-pointer focus:bg-[#303339] focus:text-neutral-200">
                Наука
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer focus:bg-[#303339] focus:text-neutral-200">
                Спорт
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer focus:bg-[#303339] focus:text-neutral-200">
                Литература
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="bg-[#303339] text-[#728796]">
            Сброс фильтров
          </Button>
        </div>
        <div className="flex w-[188px] flex-col gap-[12px] rounded-r-md bg-[#212328] px-[10px] py-[12px]">
          {posts.slice(0, 5).map((post) => (
            <a key={post.id} href={String(post.id)}>
              <div className="flex flex-col gap-[4px]">
                <p className="truncate text-[11px] leading-[13px] text-[#C1E1FF] transition hover:opacity-75">
                  {post.title}
                </p>
                <img
                  className="h-[96px]"
                  src="/src/assets/video.jpg"
                  alt="Жест"
                />
              </div>
            </a>
          ))}
          <div className="flex items-center justify-between px-[12px]">
            <button className="transition hover:opacity-75">
              <ChevronLeft className="h-[18px] w-[18px] text-[#630B12]" />
            </button>
            <div className="text-[13px] text-[#7a7a7a]">1-4 из 206</div>
            <button className="transition hover:opacity-75">
              <ChevronRight className="h-[18px] w-[18px] text-[#3EA2FF]" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
// /* 1-4 из 206 */

// margin: 0 auto;
// width: 62px;
// height: 15px;

// font-family: 'Gilroy';
// font-style: normal;
// font-weight: 400;
// font-size: 13.33px;
// line-height: 15px;

// color: #DDDDDD;

// opacity: 0.5;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

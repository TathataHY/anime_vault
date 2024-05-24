"use client";

import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

let page = 2;

export type AnimeCard = JSX.Element;

function LoadMore() {
  const [data, setData] = useState<AnimeCard[]>([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchAnime({ page, limit: 20 }).then((res) => setData([...data, ...res]));
      page += 1;
    }
  }, [inView, data]);

  return (
    <>
      <section className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;

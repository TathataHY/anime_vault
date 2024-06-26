import { BASE_URL } from "@/app/_data";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.15, duration: 0.3, ease: "easeInOut" }}
      viewport={{ amount: 0 }}
      className="relative rounded w-full max-w-sm"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={BASE_URL + anime.image.original}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3 py-4">
        <div className="flex justify-between items-center gap-1">
          <h2 className="line-clamp-1 w-full font-bold text-white text-xl">
            {anime.name}
          </h2>
          <div className="bg-[#161921] px-2 py-1 rounded-sm">
            <p className="font-bold text-sm text-white capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="font-bold text-base text-white">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="font-bold text-[#FFAD49] text-base">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;

"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { BASE_URL } from "./_data";

export const fetchAnime = async ({
  page = 1,
  limit = 20,
}: {
  page?: number;
  limit?: number;
}) => {
  //   const response = await fetch("https://api.jikan.moe/v4/anime");
  //   const data = await response.json();
  //   return data.data;
  const response = await fetch(
    `${BASE_URL}/api/animes?page=${page}&limit=${limit}`
  );
  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

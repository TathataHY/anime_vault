import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";
// import { data } from "./_data";

async function Home() {
  const data = await fetchAnime({});

  return (
    <main className="flex flex-col gap-10 px-8 py-16 sm:p-16">
      <h2 className="font-bold text-3xl text-white">Explore Anime</h2>

      <section className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;

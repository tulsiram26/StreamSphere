import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import Horizontalcards from "./partials/Horizontalcards";
import Dropdown from "./partials/Dropdown"; // Ensure Dropdown is imported
import Loading from "./Loader";

function Home() {
  document.title = "StreamSphere | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  // Get random wallpaper
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomdata);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Get trending items based on category
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    GetTrending();
  }, [category]);

  useEffect(() => {
    if (!wallpaper) {
      GetHeaderWallpaper();
    }
  }, [wallpaper]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full">
        <Topnav />
        <Header data={wallpaper} />

        <div className="flex justify-between p-5">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>

        <Horizontalcards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;

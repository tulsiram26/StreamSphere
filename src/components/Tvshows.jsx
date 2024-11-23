import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loader";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshows = () => {
  document.title = "DTS | Tv Shows";

  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setpage] = useState(1);

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        settv((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setpage(1);
      settv([]);
      GetTv();
    }
  };

  useEffect(() => {
    refreshHandler(); // Trigger data fetching on category or duration change
  }, [category]);

  return tv ? (
    <div className="h-full w-full items-center bg-[#1f1E24] p-10">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold text-zinc-500 flex w-[1%]">
          {" "}
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line flex"
          ></i>{" "}
          TVShows
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["on_the_air", "popular", "top_rated", "airing_today"]}
          func={(e) => setCategory(e.target.value)}
        />
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={true}
        loader={<Loading />}
      >
        <Cards data={tv} title={"tv"} />
      </InfiniteScroll>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default Tvshows;

import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
  document.title = "DTS | Popular";

  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setpopular((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setpage(1);
      setpopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler(); // Trigger data fetching on category or duration change
  }, [category]);
  return popular ? (
    <div className="h-full w-full items-center bg-[#1f1E24] p-10">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-semibold text-zinc-500 flex w-[1%]">
          {" "}
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Popular
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["all", "movie", "tv"]}
          func={(e) => setcategory(e.target.value)}
        />
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={true}
        loader={<Loader />}
      >
        <Cards data={popular} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Popular;

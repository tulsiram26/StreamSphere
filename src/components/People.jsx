import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loader";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {

    document.title = "DTS | People";

  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setperson((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setpage(1);
      setperson([]);
      GetPerson();
    }
  };

  useEffect(() => {
    refreshHandler(); // Trigger data fetching on category or duration change
  }, [category]);
  return person ? (
    <div className="h-full w-full items-center bg-[#1f1E24] p-10">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold text-zinc-500 flex w-[1%]">
          {" "}
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line flex"
          ></i>{" "}
          People
        </h1>
        <Topnav />
      </div>
      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={true}
        loader={<Loading />}
      >
        <Cards data={person} title={"people"} />
      </InfiniteScroll>
    </div>
  ) : (
    <LoadingSpinner />
  );
}

export default People
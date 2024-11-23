import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

function Topnav () {
  const [query, setQuery] = useState("");
  const [seraches, setSeraches] = useState([]);
  const search = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSeraches(data.results);
    } catch (error) {
      console.error( error);
    }
  };

  useEffect(() => {
    search();
  }, [query]);

  return (
    <div className="w-[50%] h-[10vh] relative justify-center flex m-auto  items-center ">
      <i className=" text-xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-5 text-xl text-zinc-400 outline-none border-none bg-transparent"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-xl text-zinc-400 ri-close-fill"
        ></i>
      )}

      <div className="z-[100] absolute w-[50%] z-[100] max-h-[50vh] bg-white top-[100%] left-[25%] overflow-auto">
        {seraches &&
        seraches.map((s, i) => (
          <Link to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-200  duration-300 font-semibold inline-block w-full p-5 flex justify-start items-center border-2 border-zinc-100 text-zinc-600"
          >
            <img
              className="w-[6vh] h-[6v] object-cover rounded mr-5"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;

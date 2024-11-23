import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import noimage from "/noimage.jpg";

function Horizontalcards({ data }) {
  console.log(data);
  return (
    <div className="w-full p-5">
      <div className="w-[100%] flex h-[40vh] overflow-x-scroll">
        {data.length > 0 ? data.map((d, i) => (
          <Link
            to={`/${d.media_type || title}/details/${d.id}`}
            key={i}
            className="min-w-[15%] h-[35vh] m-2 bg-zinc-900 overflow-y-auto"
          >
            <img
              className="w-full h-[55%] object-cover"
              src={
                d.backdrop_path || d.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.backdrop_path || d.poster_path
                    }`
                  : { noimage }
              }
              alt=""
            />
            <div className="text-white p-3 h-[45%] overflow-y-auto">
              <h1 className=" text-white font-semibold text-xl ">
                {d.title || d.original_name || d.original_title}
              </h1>
              <p className="text-white text-sm  mt-2">
                {d.overfow && d.overview.slice(0, 40)}...
                <Link className="text-zinc-500">more</Link>
              </p>
            </div>
          </Link>
        )) : <h1 className="text-3xl text-white mt-5 font-black text-center">Nothing to show</h1>}
      </div>
    </div>
  );
}

export default Horizontalcards;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[20%] border-r-2 border-zinc-200 p-10">
      <h1 className="text-2xl text-white font-bold ">
        <i className="text-[#6556cd] ri-tv-fill mr-2"></i>
        <span>StreamSphere</span>
      </h1>

      {/* Navigation - New Feeds */}
      <nav className="flex flex-col text-zinc-300 text-lg gap-2">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link
          to={"/trending"}
          className="hover:bg-[#6556cd] hover:text-white rounded-lg duration-500 p-4 flex items-center"
        >
          <i className="mr-1 ri-fire-fill"></i>Trending
        </Link>
        <Link
          to={"/popular"}
          className="hover:bg-[#6556cd] hover:text-white rounded-lg duration-500 p-4 flex items-center"
        >
          <i className="mr-1 ri-bard-fill"></i>Popular
        </Link>
        <Link
          to={"/movies"}
          className="hover:bg-[#6556cd] hover:text-white rounded-lg duration-500 p-4 flex items-center"
        >
          <i className="mr-1 ri-movie-2-fill"></i>Movies
        </Link>
        <Link
          to={"/tvshows"}
          className="hover:bg-[#6556cd] hover:text-white rounded-lg duration-500 p-4 flex items-center"
        >
          <i className="mr-1 ri-tv-2-fill"></i>TV Shows
        </Link>
        <Link
          to={"/person"}
          className="hover:bg-[#6556cd] hover:text-white rounded-lg duration-500 p-4 flex items-center"
        >
          <i className="mr-1 ri-team-fill"></i>People
        </Link>
      </nav>

      <hr className="mt-3" />

      {/* Navigation - Website Information */}
      <nav className="flex flex-col text-zinc-300 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-5 mb-3">
          Website Information
        </h1>
        <Link
          to={"/about"}
          className="hover:bg-[#6556cd] hover:text-white rounded-lg duration-300 p-5 flex items-center"
        >
          <i className="mr-2 ri-information-fill"></i>About DTS FLIX
        </Link>
        <Link
          to={"/contact"}
          className="hover:bg-[#6556cd] hover:text-white rounded-lg duration-300 p-5 flex items-center"
        >
          <i className="mr-2 ri-phone-fill"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;

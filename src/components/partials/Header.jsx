import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  console.log(data);
  return (
    <Link
      className="w-full h-[45vh] px-16 py-5 flex flex-col justify-end items-start"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)), Url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold text-white">
        {data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-2 w-[55%] text-white">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p className="text-white mt-2">
        <i className="text-[#6556cd] ml-3 mr-1 ri-megaphone-fill"></i>
        {data.release_date || "No Information"}
        <i className="mr-1 text-[#6556cd] ri-album-fill"></i>
        {data.media_type}
      </p>
      <Link
        to={`/${data.media_type || title}/details/${data.id}/trailer`}
        className="px-3 py-2 mt-3 rounded bg-[#6556CD] rounded"
      >
        Watch Trailer
      </Link>
    </Link>
  );
}

export default Header;

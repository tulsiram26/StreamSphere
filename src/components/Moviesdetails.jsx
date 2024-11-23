import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import Loading from "./Loader";
import Horizontalcards from "./partials/Horizontalcards";

const Moviesdetails = () => {
  document.title = "DTS FLIX | MovieDetails";
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  console.log(info);
  console.log(pathname);
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)), Url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[160vh] px-[10%]"
    >
      {/* Part -1  Navigation*/}
      <nav className="h-[10vh] w-full text-zinc-300 flex items-center gap-10 text-2xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>{" "}
        <a target="blank" href={info.details.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      {/* Part -2  Poster and details*/}
      <div className="w-full flex ">
        <img
          className="shadow-[8px_17px_28px_2px_rgba(0,0,0,0.5)] h-[50vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path || info.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white ">
          <h1 className="text-5xl font-black  ">
            {info.details.title ||
              info.details.name ||
              info.details.original_name ||
              info.details.original_title}

            <small className="text-2xl font-bold text-zinc-200">
              ({info.details.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-5 flex  items-center gap-x-5">
            <span className="text-zinc-900 bg-yellow-400 w-10 h-10 flex justify-center items-center rounded-full ">
              {(info.details.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-2xl leading-6">
              User Score
            </h1>
            <h1>{info.details.release_date}</h1>
            <h1>{info.details.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.details.runtime}min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.details.tagline}
          </h1>

          <h1 className="text-2xl mt-5 mb-3">Overview</h1>
          <p>{info.details.overview}</p>

          <h1 className="text-2xl mt-5 mb-3">Languages :</h1>
          <p className="mb-10">{info.translations.join(", ")}</p>

          <Link
            className="p-3 bg-[#6556CD] rounded-lg font-semibold"
            to={`${pathname}/trailer`}
          >
            <i className="text-xl mr-3 ri-play-fill"></i>
            Watch Trailer
          </Link>
        </div>
      </div>

      {/* Part -3 Available on Platform*/}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center font-semibold text-white">
            <h1>Available on Platforms : </h1>
            {info.watchproviders.flatrate.map((m, i) => (
              <img
                key={i}
                title={m.provider_name}
                className="w-[4vh] rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${m.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center font-semibold text-white">
            <h1>Available on Rent :</h1>
            {info.watchproviders.rent.map((m, i) => (
              <img
                key={i}
                title={m.provider_name}
                className="w-[4vh] rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${m.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center font-semibold text-white">
            <h1>Available to Buy :</h1>
            {info.watchproviders.buy.map((m, i) => (
              <img
                key={i}
                title={m.provider_name}
                className="w-[4vh] rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${m.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* Part -4 Recommendations and Similar stuff*/}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl  font-bold text-white">
        Recommendation and Similar Stuffs :
      </h1>
      <Horizontalcards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviesdetails;

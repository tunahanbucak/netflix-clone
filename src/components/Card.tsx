import React, { useEffect, useRef, useState } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Box, Typography } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const baseUrl = "https://image.tmdb.org/t/p/original/";

interface Movie {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface CardProps {
  title: string;
  fetchUrl: string;
  isLargeRow: boolean;
}

export default function Card({ title, fetchUrl, isLargeRow }: CardProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [fetchUrl]);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollRef.current.clientWidth;
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollRef.current.clientWidth;
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v") || "");
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <Box sx={{ color: "white", position: "relative" }}>
      <Typography variant="h5">{title}</Typography>
      <Box
        sx={{
          display: "flex",
          overflowY: "hidden",
          position: "relative",
        }}
      >
        <ArrowLeftIcon
          onClick={scrollLeft}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
            cursor: "pointer",
            borderRadius: "50%",
            background: "gray",
            width: 50,
            height: 50,
          }}
        />
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "scroll",
            padding: "20px",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {movies?.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              style={{
                width: "100%",
                objectFit: "contain",
                maxHeight: isLargeRow ? 250 : 150,
                transition: "transform 450ms",
                marginRight: "10px",
              }}
              src={`${baseUrl}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </Box>
        <ArrowRightIcon
          onClick={scrollRight}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
            cursor: "pointer",
            borderRadius: "50%",
            background: "gray",
            width: 50,
            height: 50,
          }}
        />
      </Box>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Box>
  );
}

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

type SxProps = {
  [key: string]: React.CSSProperties;
};

export default function Card({ title, fetchUrl, isLargeRow }: CardProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string>("");
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
    <Box sx={{ color: "white" }}>
      <Typography variant="h5">{title}</Typography>
      <Box
        sx={
          {
            display: "flex",
            overflowY: "hidden",
            overflowX: "scroll",
            padding: "20px",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          } as SxProps
        }
      >
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            style={
              {
                width: "100%",
                objectFit: "contain",
                maxHeight: isLargeRow ? 250 : 150,
                transition: "transform 450ms",
                marginRight: "10px",
                "&:hover": {
                  transform: isLargeRow ? "scale(1.09)" : "scale(1.08)",
                },
              } as SxProps
            }
            src={`${baseUrl}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </Box>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Box>
  );
}

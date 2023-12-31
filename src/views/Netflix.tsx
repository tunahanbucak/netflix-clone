import { useState } from "react";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import requests from "../requests";
import Card from "../components/Card";

const categoryData = [
  {
    title: 'En Çok İzlenen'
  },
  {
    title: 'Bu Aralar Moda'
  },
  {
    title: 'En Çok Oy Alan'
  },
  {
    title: 'Romantik Filmler'
  },
  {
    title: 'Aksiyon Filmler'
  },
  {
    title: 'Korku Filmler'
  },
  {
    title: 'Komedi Filmler'
  },
  {
    title: 'Belgeseller'
  },
]

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <TopNav isScrolled={isScrolled} />
        <img
          style={{
            filter: "brightness(40%)",
            height: "70vh",
            width: "100%",
          }}
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
          alt="hero image"
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "1rem",
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                marginLeft: "5rem",
                textTransform: "uppercase",
                fontSize: "73px",
                backgroundImage:
                  "-webkit-linear-gradient(#eee, rgb(128, 13, 13))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                position: "relative",
              }}
            >
              Super man
            </Typography>
            <Typography
              sx={{
                marginBottom: "-50px",
                width: 640,
                marginLeft: "5rem",
                color: "white",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "5rem",
              gap: "2rem",
            }}
          >
            <Button
              onClick={() => navigate("/player")}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                borderRadius: "1rem",
                fontSize: "1.4rem",
                gap: "1rem",
                padding: "0.9rem",
                paddingLeft: "2rem",
                paddingRight: "2.4rem",
                border: "0.1rem solid red",
                cursor: "pointer",
                backgroundColor: "red",
              }}
            >
              <Typography> Oynat</Typography>
            </Button>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                backgroundColor: "black",
                borderRadius: "1rem",
                fontSize: "1.4rem",
                gap: "1rem",
                padding: "0.9rem",
                paddingLeft: "2rem",
                paddingRight: "2.4rem",
                border: "0.1rem solid white",
                cursor: "pointer",
              }}
            >
              <Typography>Daha fazla</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      {categoryData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
      ))}

    </Box>
  );
}

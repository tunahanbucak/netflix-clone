import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";

export default function Player() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            padding: "2rem",
            zIndex: 1,
          }}
        >
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            sx={{
              fontSize: "3rem",
              cursor: "pointer",
              color: "white",
            }}
          />
        </Box>
        <video
          src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
          autoPlay
          loop
          controls
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
}

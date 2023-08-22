import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header(props: any) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Box>
        <img
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
          alt="no internet connection"
          style={{
            height: "3rem",
            cursor: "pointer",
          }}
        />
      </Box>
      <Button
        onClick={() => navigate(props.login ? "/login" : "/signup")}
        sx={{
          padding: "0.5rem 1rem",
          backgroundColor: "red",
          border: "none",
          cursor: "pointer",
          color: "white",
          borderRadius: "0.2rem",
          fontWeight: "bolder",
          fontSize: "1.05rem",
          textTransform: "none",
        }}
      >
        {props.login ? "Log In " : "Sign In"}
      </Button>
    </Box>
  );
}

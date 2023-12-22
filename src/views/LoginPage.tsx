import { Box, } from "@mui/material";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <Box>
      <BackgroundImage />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: "100%",
          width: "100%",
          gridTemplateColumns: "15vh 85vh",
        }}
      >
        <Header login />
        <Login />
      </Box>
    </Box>
  );
}

import { Box } from "@mui/material";

export default function BackgroundImage() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/f70797df-0e1a-4e4a-b5de-089f9c544a0f/TR-tr-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
}

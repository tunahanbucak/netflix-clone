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
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/1756a9bc-0731-4094-a4a0-fca5d0934d47/TR-tr-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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

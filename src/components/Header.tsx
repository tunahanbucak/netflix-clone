import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header(props: any) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 3,
        px: { xs: 0, lg: 10 }
      }}
    >
      <Box>
        <img
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
          alt="no internet connection"
          style={{
            height: "38px",
            cursor: "pointer",
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 3
        }}>
        <FormControl sx={{ m: 1, minWidth: 120, background: 'gray' }} size="small">
          <InputLabel id="demo-select-small-label">Age</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={() => navigate(props.login ? "/signup" : "/login")}
          sx={{
            padding: "0.5rem 1rem",
            backgroundColor: "red",
            border: "none",
            cursor: "pointer",
            color: "white",
            borderRadius: 2,
            fontWeight: "bolder",
            fontSize: "1.05rem",
            textTransform: "none",
          }}
        >
          {props.login ? "Kayıt Ol" : "Oturum Aç "}
        </Button>
      </Box>
    </Box >
  );
}

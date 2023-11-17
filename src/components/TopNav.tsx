import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

interface TopNavProps {
  isScrolled: boolean;
}
export default function TopNav({ isScrolled }: TopNavProps) {
  const navlinks = [
    { name: "Anasayfa", link: "/" },
    { name: "Diziler ", link: "/tv" },
    { name: "Filmler", link: "/movie" },
  ];
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });
  return (
    <AppBar>
      <Box
        sx={{
          backgroundColor: isScrolled ? "black" : "transparent",
          height: "6rem",
          width: "100%",
          justifyContent: "space-between",
          position: "fixed",
          zIndex: 2,
          padding: " 0.4rem",
          alignItems: " center",
          transition: " 0.3s ease-in",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            marginLeft: "5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
              alt="logo"
              style={{
                width: 100,
                height: 20,
              }}
            />
          </Box>
          <List
            sx={{
              display: "flex",
              listStyleType: "none",
              gap: " 3rem",
            }}
          >
            {navlinks.map(({ name, link }) => (
              <ListItem key={name} disablePadding>
                <ListItemButton
                  sx={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  component={Link}
                  to={link}
                >
                  {name}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginRight: "1rem",
          }}
        >
          <Button
            sx={{
              backgroundColor: "red",
              border: "none",
              cursor: "pointer",
              borderRadius: "50%",
              "&:focus": {
                outline: "none",
              },
            }}
            onClick={() => signOut(firebaseAuth)}
          >
            <ExitToAppIcon
              sx={{
                color: "white",
                fontSize: "1.7rem",
              }}
            />
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
}

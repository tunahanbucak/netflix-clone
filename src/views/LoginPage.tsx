import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { firebaseAuth } from "../utils/firebase-config";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
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
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            height: "85vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              backgroundColor: "rgba(0,0,0,0.83)",
              height: 550,
              padding: "2rem",
              color: "#fff",
              borderRadius: "0.4rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: 500,
                }}
              >
                Oturum Aç
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <TextField
                variant="outlined"
                type="email"
                label="E-posta  veya telefon numarası"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                sx={{
                  fontSize: "1.2rem",
                  color: "black",
                  backgroundColor: "#555555",
                }}
              />
              <TextField
                variant="outlined"
                type="password"
                label="Parola"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                sx={{
                  width: "25rem",
                  fontSize: "1.2rem",
                  color: "black",
                  backgroundColor: "#555555",
                }}
              />
              <Button
                onClick={handleLogin}
                sx={{
                  padding: "0.5rem",
                  backgroundColor: "red",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "0.4rem",
                  height: "3.4rem",
                  color: "white",
                  textTransform: "none",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "1.05rem",
                  }}
                >
                  Oturum Aç
                </Typography>
              </Button>
              <Typography>
                Netflix'e katılmak ister misiniz?
                <Link to="/signup"> Şimdi kaydolun</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

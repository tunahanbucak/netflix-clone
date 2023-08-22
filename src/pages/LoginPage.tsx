import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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
          height: "100vh",
          width: "100vw",
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
              height: "70vh",
              padding: "2rem",
              color: "white",
              borderRadius: "0.4rem",
            }}
          >
            <Box>
              <Typography variant="h1">login</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                style={{
                  borderRadius: "0.4rem",
                  padding: "0.5rem 1rem",
                  width: "25rem",
                  height: "2.9rem",
                  outline: "none",
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{
                  borderRadius: "0.4rem",
                  padding: "0.5rem 1rem",
                  width: "25rem",
                  height: "2.9rem",
                  outline: "none",
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
                  Login
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

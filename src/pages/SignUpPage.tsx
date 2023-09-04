import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { firebaseAuth } from "../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  const focusStyles = {
    outline: "none",
  };

  return (
    <Box>
      <BackgroundImage />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.79)",
          height: "100vh",
          width: "100vw",
          gridTemplateColumns: "15vh 85vh",
        }}
      >
        <Header login />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              fontSize: "2rem",
              color: "white",
              padding: "1rem",
            }}
          >
            <Typography variant="h1">Herkes burada!</Typography>
            <Typography variant="h4">
              Favori oyuncunuz, en yakın arkadaşınız, karşı komşunuz. Tabii
              filmin, dizinin ve belgeselin âlâsı da.
            </Typography>
            <Typography variant="h6">
              İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak
              için tek yapmanız gereken e-posta adresinizi girmek.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              width: "60%",
              gridTemplateColumns: showPassword ? "1fr 1fr" : "2fr 1fr",
              mt: 5,
            }}
          >
            {showPassword ? (
              <TextField
                sx={{
                  fontSize: "1.2rem",
                  color: "black",
                  backgroundColor: "#555555",
                }}
                variant="outlined"
                type="password"
                label="Şifre"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            ) : (
              <TextField
                sx={{
                  fontSize: "1.2rem",
                  color: "black",
                  backgroundColor: "#555555",
                }}
                variant="outlined"
                type="email"
                label="E-posta adresi"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {!showPassword ? (
              <Button
                onClick={() => setShowPassword(true)}
                sx={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "red",
                  border: "none",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "1.05rem",
                  width: "10rem",
                  fontWeight: "bolder",
                }}
              >
                <Typography>Başlayın</Typography>
                <ArrowForwardIosIcon />
              </Button>
            ) : (
              <Button
                onClick={handleSignIn}
                sx={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "red",
                  border: "none",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "1.05rem",
                  width: "10rem",
                  fontWeight: "bolder",
                }}
              >
                <Typography>Üye olmak</Typography>
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

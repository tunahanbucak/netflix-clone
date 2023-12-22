import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { firebaseAuth } from "../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SignUp from "../components/SignUp";

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
        <Header />
        <SignUp />
      </Box>
    </Box>
  );
}

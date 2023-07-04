import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

import reportWebVitals from "./reportWebVitals";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="quiz-page" element={<QuizPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#00ef81",
          100: "#00ef81",
          200: "#00ef81",
          300: "#00ef81",
          400: "#00ef81",
          500: "#00ef81",
          600: "#00ef81",
          700: "#00ef81",
          800: "#00ef81",
          900: "#00ef81",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#00ef81",
          100: "#00ef81",
          200: "#00ef81",
          300: "#00ef81",
          400: "#00ef81",
          500: "#00ef81",
          600: "#00ef81",
          700: "#00ef81",
          800: "#00ef81",
          900: "#00ef81",
        },
      },
    },
  },
  Typography: {
    fontFamily: "Bacasime Antique",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <CssVarsProvider theme={theme}>
    <App />
  </CssVarsProvider>
  // </React.StrictMode>
);
reportWebVitals();

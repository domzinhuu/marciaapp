import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import { RegisterProvider } from "./context/register.context";

const AppRoutes = () => {
  const themeOptions = {
    palette: {
      type: "light",
      primary: {
        main: "#388e3c",
      },
      secondary: {
        main: "#f57c00",
      },
      success: {
        main: "#00c853",
      },
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RegisterProvider>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </RegisterProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;

import {useState, useMemo} from "react";
import "./style/main.scss";
import {ThemeProvider} from "@mui/material/styles";
import {createTheme} from "@mui/material/styles";
import About from "./pages/About";
import {Box} from "@mui/material";
import variables from "./style/abstract/_variable.scss";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MobileTop from "./components/MobileTop";
import Footer from "./components/Footer";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleMode() {
    setDarkMode(!darkMode);
  }
  const theme = useMemo(() => {
    return createTheme({
      mode: darkMode ? "dark" : "light",
      palette: {
        text: {
          primary: darkMode ? "#fff" : "#000",
        },
        background: {
          default: darkMode ? variables.dark_bg : variables.light_bg,
        },
      },
    });
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <div className="app">
          <MobileTop darkMode={darkMode} toggleMode={toggleMode}></MobileTop>
          <div className="content">
            <Home></Home>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
            <Footer darkMode={darkMode}></Footer>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;

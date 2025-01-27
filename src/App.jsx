import {useState, useMemo, useEffect, useRef} from "react";
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
import MobileNav from "./components/MobileNav";
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

  const [isNavVisible, setIsNavVisible] = useState(false);
  const scrollContainerRef = useRef(null); // Reference for the scrollable element
  const lastScrollY = useRef(0); // Reference for last scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const currentScrollY = scrollContainerRef.current.scrollTop; // Get scroll position of the element

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsNavVisible(false); // Hide nav on scroll down
      } else {
        setIsNavVisible(true); // Show nav on scroll up
      }

      lastScrollY.current = currentScrollY; // Update last scroll position
    };

    const scrollableElement = scrollContainerRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <div className="app" ref={scrollContainerRef}>
          <div className={`mobile-top-wrap ${isNavVisible ? "" : "hidden"}`}>
            <MobileTop darkMode={darkMode} toggleMode={toggleMode}></MobileTop>
          </div>
          <div className="content">
            <Home></Home>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
            <Footer darkMode={darkMode}></Footer>
          </div>
          <div className={`mobile-nav-wrap ${isNavVisible ? "" : "hidden"}`}>
            <MobileNav />
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;

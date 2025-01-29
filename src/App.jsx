import React, {useState, useMemo, useEffect, useRef} from "react";
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

  const [isTopVisible, setIsTopVisible] = useState(true);
  const scrollContainerRef = useRef(null); // Reference for the scrollable element
  const lastScrollY = useRef(0); // Reference for last scroll position

  const sectionRefs = useRef(Array.from({length: 5}, () => React.createRef()));
  const [activeSection, setActiveSection] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const currentScrollY = scrollContainerRef.current.scrollTop; // Get scroll position of the element

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setIsTopVisible(false); // Hide nav on scroll down
      } else {
        setIsTopVisible(true); // Show nav on scroll up
      }

      lastScrollY.current = currentScrollY; // Update last scroll position
    };

    const handleSectionScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          ref = ref.current;
          const rect = ref.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Check if the section is above threshold
          if (
            rect.top <= viewportHeight * 0.6 &&
            rect.bottom >= viewportHeight * 0.6
          ) {
            setActiveSection(index);
          }
        }
      });
    };

    const scrollableElement = scrollContainerRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll);
      scrollableElement.addEventListener("scroll", handleSectionScroll);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScroll);
        scrollableElement.removeEventListener("scroll", handleSectionScroll);
      }
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          transition: "background-color 0.2s ease",
        }}
      >
        <div className="app" ref={scrollContainerRef}>
          <div className={`mobile-top-wrap ${isTopVisible ? "" : "hidden"}`}>
            <MobileTop darkMode={darkMode} toggleMode={toggleMode}></MobileTop>
          </div>
          <div className="content">
            <Home
              startSectionRef={sectionRefs.current[1]}
              ref={sectionRefs.current[0]}
            ></Home>
            <About ref={sectionRefs.current[1]}></About>
            <Experience ref={sectionRefs.current[2]}></Experience>
            <Projects ref={sectionRefs.current[3]}></Projects>
            <Contact ref={sectionRefs.current[4]}></Contact>
            <Footer darkMode={darkMode}></Footer>
          </div>
          <div
            className={`mobile-nav-wrap ${activeSection !== 0 ? "" : "hidden"}`}
          >
            <MobileNav
              refs={sectionRefs.current}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;

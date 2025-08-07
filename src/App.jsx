import { useEffect, useState } from "react";
import Career from "./components/Career";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference on first load
  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(systemPrefersDark);
  }, []);

  // Apply dark mode to HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Hero />
      <Expertise />
      <Career />
      <Projects />
      <Form />
      <Footer />
    </>
  );
}

export default App;

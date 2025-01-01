import { useEffect } from "react";
import Hero from "../Components/Home/Hero";
import DetailsCards from "../Components/Home/DetailsCards";
import Packages from "../Components/Home/Packages";
import Footer from "../Components/Home/Footer";
import BottonHero from "../Components/Home/BottonHero";
import Testimony from "../Components/Home/Testimony";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import ThemeToggle from "../Components/Theme/ThemeToggle";

const Home = () => {
  const { theme } = useTheme();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div
      data-theme={theme}
      className="w-screen h-screen flex noScrollbar flex-col overflow-auto select-none"
    >
      <Hero />
      <DetailsCards />
      <Packages />
      <Testimony />
      <BottonHero />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Home;

import React from "react";
import CallToAction from "./cta";
import HeroSection from "./hero-section";
import Intro from "./intro";
import Team from "./team";
import Vision from "./vision";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

export default function About() {
  const [size, setSize] = React.useState([0, 0]);

  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <Intro size={size} />
      <Vision />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
}

import React from "react";
import Aim from "./aim";
import Counter from "./counter";
import HeroSection from "./hero-section";
import Steps from "./steps";
import TopFeatures from "./top-features";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import FamousPlaces from "./famous-places";
import CallToContact from "./cta";

export default function Home() {
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
      <TopFeatures />
      <Counter />
      <Aim size={size} />
      <Steps />
      <span id="famous-places">
        <FamousPlaces />
      </span>
      <CallToContact />
      <Footer />
    </div>
  );
}

import React from "react";
import LoveUs from "./Section/landingPage/LoveUs";

import FitnessPlan from "./Section/landingPage/FitnessPlan";
import Banner from "./Section/landingPage/Banner";
import Facebook from "./Section/landingPage/Facebook";
import Footer from "./Section/Footer";
const Home = () => {
  return (
    <>
      <Banner />
      <LoveUs />

      <FitnessPlan />
      <Facebook />
      <Footer />
    </>
  );
};
export default Home;

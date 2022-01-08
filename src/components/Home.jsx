import { Fragment } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HeroFeature from "./HeroFeature";
import Why from "./Why";
import Feature from "./Feature";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <HeroFeature />
      <Why />
      <Feature />
    </Fragment>
  );
};

export default Home;

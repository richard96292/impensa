import React from "react";
// components
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/header";
import Feature from "../../components/Feature/index.jsx";
import HeroSection from "../../components/HeroSection";
import { homeObjOne, homeObjTwo } from "../../data/Data-HeroSection.js";
import {
  featureObjOne,
  featureObjTwo,
  featureObjThree,
  featureObjFour,
} from "../../data/Data-Features.js";
import {
  FeaturesContainer,
  RowOne,
  RowTwo,
  RowOneHeading,
  RowOneSubheading,
  Br,
} from "./style";
import { Element } from "react-scroll";
const Homepage = () => {
  document.title = "Impensa";

  return (
    <>
      <Header />
      <Element name="HeroSection">
        <HeroSection {...homeObjOne} />
      </Element>
      <HeroSection {...homeObjTwo} />
      <FeaturesContainer>
        <RowOne>
          <RowOneHeading>Why choose us?</RowOneHeading>
          <RowOneSubheading>
            In the modern capitalistic society financial literacy means a lot,
            <Br /> we are happily providing you with the best tools available to
            optimize your day-to-day financial decisions.
          </RowOneSubheading>
        </RowOne>
        <RowTwo>
          <Feature {...featureObjOne} />
          <Feature {...featureObjTwo} />
          <Feature {...featureObjThree} />
          <Feature {...featureObjFour} />
        </RowTwo>
      </FeaturesContainer>

      <Footer />
    </>
  );
};

export default Homepage;

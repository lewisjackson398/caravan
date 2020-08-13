import React from "react";
import { Link } from "react-scroll";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/CaravanNav/CaravanHeader.js";
import CaravanFooter from "components/Footer/CaravanFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/CaravanNav/CaravanHeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ParkSection from "./Sections/ParkSection.js";
import ContactSection from "./Sections/ContactSection.js";
import DetailsSection from "./Sections/DetailsSection.js";
import CaravanCarousel from "./Sections/CaravanCarousel.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id="home">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="46 The Meadows"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
      </Link>
      <Parallax filter image={require("assets/img/background.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Carnaby Rosedale</h1>
              <h4>
                Tattershall Lakes Country Park, Tattershall, Lincolnshire,
                Lincolnshire
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.myholidaycaravan.co.uk/uk-sites/lincolnshire/tattershall-lakes-country-park/83/Park%20Operator"
                target="_blank"
                rel="noopener noreferrer"
              >
                View caravan park
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <DetailsSection />
          <CaravanCarousel />
          <ParkSection />
          <ContactSection />
        </div>
      </div>
      <CaravanFooter />
    </div>
  );
}

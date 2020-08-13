import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/caravanSections/parkStyle.js";

const useStyles = makeStyles(styles);
const text = [
  "Fresh air, lakeside location, relaxing park facilities – all on your doorstep far away from the hustle and bustle of everyday life. Forget about deciding where to go and the hassle of having to book up way in advance – simply step inside and it’s your very own home from home every time.",
  <br />,
  <br />,
  "Of course, no holiday park is truly complete without a wide range of facilities that provide you with options every visit including; Heated indoor pool with gym & hot tub, beach and outdoor entertainment area, great food and drink, adventure golf, outdoor adventure playgrounds, aqua park, water-ski lake and more.",
  <br />,
  <br />,
  "We’re located in Lincolnshire, one of the largest counties in Britain meaning there is something for everyone. This historic county caters for individuals, couples and families, whatever your age you will have a ball. There are festivals, stately homes, castles – in fact one of the best is just a few hundred yards from our park. There is also mile upon mile of great cycling routes, beautiful coast & country walks and some of the best-known seaside towns in the UK. With a superb selection of holiday homes available to view as well as a stunning new pitch development, Tattershall Lakes really is the perfect location to own your very own holiday home.",
];

const bullets = [
  "•£5.5M investment for 2019", <br />,

  "•Indoor Heated Pool with Gym & Hot Tub", <br />,

  "•Jet Ski Lake", <br />,

  "•Water Ski Lake", <br />,

  "•Fishing Lakes", <br />,

  "•Beach & Outside Entertainment Area", <br />,

  "•Outdoor Adventure Playground", <br />,

  "•Adventure Golf", <br />,

  "•Indoor Splashzone - New for 2019", <br />,

  "•Multi-Use Sports Court", <br />,

  "•High Ropes", <br />,

  "•The Spitfire Bar & Diner", <br />,

  "•The Propeller Bar", <br />,

  "•Bar 49 - State-of-the-art sky bar - New for 2019", <br />,

  "•Park Supermarket", <br />,

  "•Family Entertainment", <br />,

  "•Outdoor Cinema", <br />,

  "•Pet Friendly", <br />,

  "•Fantastic sublet opportunities", <br />,

  "•Brand new pitch development - New for 2019", <br />,

  "•Open all year",
];

export default function DetailsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} id="c">Tattershall Park Facilities</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6}>
            <InfoArea
              title="Site Description"
              description={text}
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={6}>
            <InfoArea
              title="Site Checklist"
              description={bullets}
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

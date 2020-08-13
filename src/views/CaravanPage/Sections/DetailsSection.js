import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
//import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/caravanSections/detailsStyle.js";

const useStyles = makeStyles(styles);

const text = [
  "Introducing the Rosedale, a unique and special three bed retreat that has been thoughtfully designed to evoke a cosy and traditional cottage feel. With its clear division of living areas, the Rosedale boasts a flexible space, whether you’re holidaying as part of a couple or with family and friends.",
  <br />,
  <br />,
  "The sumptuous living area is divine, with a plump and lengthy plush sofa that’s perfectly positioned next to the gorgeous full-length windows, creating the perfect spot for a summer laze. A beautiful feature fireplace is the icing on the cake for those cooler evenings in, creating a welcoming and snug environment to relax or entertain.",
];

const text2 = [
  "The separate and generously equipped kitchen is any holiday chef’s dream! Boasting stylish feature flooring, bountiful storage, an under-counter fridge and freezer and integrated microwave. The country home aesthetic works beautifully in the bright kitchen and the sophisticated dining table and four chairs await adjacently, making it easy to invite guests over to a holiday home you’ll be proud of.",
  <br />,
  <br />,
  "A door to the rear of the holiday home leads through to the family bathroom and sleeping areas. The bathroom is a real oasis of calm, with soft and calming tones accompanying the highest quality fittings, including the powerful thermostatic shower, promising to leave you feeling refreshed and ready for the next adventure.",
];

const text3 = [
  "The Rosedale also features a separate WC, so nobody will need to wait for the bathroom again! The master bedroom is a peaceful haven, with clever storage options, stunning styling and a supremely comfortable mattress. The two convenient twin bedrooms also ensure the deepest night’s sleep, whilst a concealed bed in the living area makes way for a further two guests, meaning this Rosedale can sleep up to eight people.",
  <br />,
  <br />,
  "Carnaby’s Rosedale encompasses everything you love about getting away, whilst including all of the home comforts you are accustomed to. A truly remarkable and luxurious hide-out situated against one of the most idyllic backdrops.",
];
export default function DetailsSection2() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} id="a">Carnaby Rosedale</h2>
          <h5 className={classes.description}>Things to know</h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Site Description"
              description={text}
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Site Description"
              description={text2}
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Site Description"
              description={text3}
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

import { container } from "assets/jss/material-kit-react.js";
import { title } from "assets/jss/material-kit-react.js";

const carouselStyle = {
  section: {
    padding: "0px 0",
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
};

export default carouselStyle;

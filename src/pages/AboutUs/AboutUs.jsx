import React from 'react';
import Body from "../../components/Body/Body";
import useStyles from './styles';
import Footer from "../../components/Footer/Footer";

const AboutUs = () => {
    const classes = useStyles();
  return (
    <main className={classes.abt}>
        <Body />
        <Footer />
    </main>
  );
}

export default AboutUs;

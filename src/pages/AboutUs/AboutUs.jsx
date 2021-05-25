import React from 'react';
import Body from "../../components/Body/Body";
import useStyles from './styles';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const AboutUs = () => {
    const classes = useStyles();
  return (
    <>
    <Header/>
    <main className={classes.abt}>
        <Body />
        <Footer />
    </main>
    </>
  );
}

export default AboutUs;

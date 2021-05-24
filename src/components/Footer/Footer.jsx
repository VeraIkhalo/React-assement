import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import Subscribe from '../../assets/subscribe1.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
    const classes = useStyles();

    return (
      <main  className={classes.footer}>
          <Grid container justify="center">
            <Grid item xs={12} sm={12} md={5} lg={5}>
                <img src={Subscribe} alt=""  className={classes.image} />
            </Grid> 
            <Grid item xs={12} sm={12} md={5} lg={5}  >
               <Typography variant="h4" className={classes.member}>Be a  member of our community 🎉</Typography>
               <p className={classes.memberparagraph}>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
               <div style={{position:'relative'}}>
               <input  style={{color:'white'}} className={classes.input} placeholder="enter your email" />
               <Button className={classes.button}>SUBSCRIBE</Button>
               </div>
            </Grid>  
        </Grid>

        <Grid container justify="center" style={{paddingTop:60}}spacing={2}>
            <Grid item xs={6} sm={6} md={2} lg={2} >
                    <Typography className={classes.footerheading}>Company</Typography>
                    <p className={classes.list}>About Us</p>
                    <p className={classes.list}>Terms of Use</p>
                    <p className={classes.list}>Privacy Policy</p>
                    <p className={classes.list}>Press & Media</p>   
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg={2} >
                    <Typography className={classes.footerheading}>Products</Typography>
                    <p className={classes.list}>Market Place</p>
                    <p className={classes.list}>Magazine</p>
                    <p className={classes.list}>Seller</p>
                    <p className={classes.list}>Wholesale</p>
                    <p className={classes.list}>Services</p>   
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg={2} >
                    <Typography className={classes.footerheading}>Careers</Typography>
                    <p className={classes.list}>Become a Campus Rep</p>
                    <p className={classes.list}>Become a Vasiti Influencer</p>
                    <p className={classes.list}>Become a Campus writer</p>
                    <p className={classes.list}>Become an affiliate</p>   
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg={2} >
                    <Typography className={classes.footerheading}>Get in Touch</Typography>
                    <p className={classes.list}>Contact Us</p>
                    <p className={classes.list}>Partner with Us</p>
                    <p className={classes.list}>Advertise with Us</p>
                    <p className={classes.list}>Help/FAQs</p>   
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} >
                    <Typography className={classes.footerheading}>Join Our Community</Typography>
                    <p className={classes.list}> <FacebookIcon /> <YouTubeIcon />  <TwitterIcon /> <LinkedInIcon /> </p>
                    <p className={classes.list}></p>
                    <p className={classes.list}>Email Newsletter</p>
                    <p className={classes.list}></p>   
            </Grid>
        </Grid>

      </main>
    );
  };
  
  export default Footer;
  
  
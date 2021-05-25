import React from 'react';
import useStyles from './styles';
import { Typography, Paper, Grid, Button } from '@material-ui/core';
import Join from '../../assets/join.png';
import { NavLink } from "react-router-dom";


const Stories = () => {
    const classes = useStyles();
    return (
      <main style={{paddingTop:90}} > 
          <Grid container justify="center">
              <Grid item> 
                  <Paper className={classes.paper} style ={{width:'100%', height:450}}>
                      <img className={classes.image} src={Join} alt="" />
                      <Typography className={classes.heading} variant="h5"style={{fontWeight:700}}> Thank you for sharing your story!</Typography>
                      <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                      <NavLink exact to="/">
                        <Button style={{backgroundColor:'#FF5C00'}}className={classes.button}>
                            Close</Button>
                      </NavLink>      
                  </Paper>   
                </Grid>
          </Grid>
      </main>
    );
  };
  
  export default Stories;
  
  
import React from 'react';
import useStyles from './styles';
import { Typography, Button } from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';

const Stories = () => {
    const classes = useStyles();

    return (
      <main style={{paddingTop:90}}> 
        <form className={classes.form}>
              <Typography variant="h4" style={{textAlign: 'center'}} className={classes.sharestory}>Share your amazing story!</Typography>
              <div style={{position:'relative'}}>
              <label>Upload your Picture</label>
              <br/>
              <input type='text' placeholder='Choose Image'className={classes.input}/>
              <label htmlFor="fileInput">
              <AttachmentIcon className={classes.icon} />
              </label>
              <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
            />
              </div>
              
              <label className={classes.label}>First Name</label>
              <br/>
              <input type='text'className={classes.input} required/>
              <br/>
              <label className={classes.label}>Last Name</label>
              <br/>
              <input type='text' className={classes.input} required/>
              <br/>
              <label className={classes.label}>Share your story</label>
              <br/>
              <textarea className={classes.input}></textarea>
            <div className={classes.interact}><span>What did you interact with vasiti as?</span><span><input type='radio'/><span>Customer</span><input type='radio'/><span>Vendor</span></span></div> 
            <label className={classes.label}>City or Higher Institution(for Students)</label> 
            <br />
            <Button className={classes.button}>Share your Story</Button>
        </form>
      </main>
    );
  };
  
  export default Stories;
  
  
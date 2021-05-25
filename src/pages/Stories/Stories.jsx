import useStyles from './styles';
import { Typography, Button } from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { NavLink } from "react-router-dom";


const Stories = () => {
    const classes = useStyles();
    
    return (
      <>
      <main style={{padding:20}}> 
        <form className={classes.form}>
              <Typography variant="h4" style={{textAlign: 'center'}} className={classes.sharestory}>Share your amazing story!</Typography>
              <div style={{position:'relative'}}>
              <label>Upload your Picture</label>
              <br/>
              <input required type='image/text' placeholder='Choose Image'className={classes.input} />
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
              <input required type='text'className={classes.input} />
              <br/>
              <label className={classes.label}>Last Name</label>
              <br/>
              <input  required type='text' className={classes.input} />
              <br/>
              <label className={classes.label}>Share your story</label>
              <br/>
              <textarea className={classes.input}></textarea>
            <div className={classes.interact}><span>What did you interact with vasiti as?</span><span><input type='radio'/><span>Customer</span><input type='radio'/><span>Vendor</span></span></div> 
            <label className={classes.label}>City or Higher Institution(for Students)</label> 
            <br />
            <NavLink
                exact
                to="/Thankyou"
                >
            <Button style={{backgroundColor:'#FF5C00'}}className={classes.button}>Share your Story</Button>
            </NavLink>
        </form>
      </main>
      </>
    );
  };
  
  export default Stories;
  
  
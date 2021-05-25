import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import Testimonial from '../../assets/Testimonial1.png';
import Black from '../../assets/black.png';
import Ellipse1 from '../../assets/Ellipse1.png';
import Ellipse2 from '../../assets/Ellipse2.png';
import Ellipse3 from '../../assets/Ellipse3.png';
import Ellipse4 from '../../assets/Ellipse4.png';
import Ellipse5 from '../../assets/Ellipse5.png';
import Ellipse6 from '../../assets/Ellipse6.png';
import Ellipse7 from '../../assets/Ellipse7.png';
import Ellipse8 from '../../assets/Ellipse8.png';
import Ellipse9 from '../../assets/Ellipse9.png';
import Ellipse10 from '../../assets/Ellipse 10.png';
import Ellipse11 from '../../assets/Ellipse11.png';
import Ellipse12 from '../../assets/Ellipse12.png';
import woman from '../../assets/woman1.png';


const Body = () => {
    const classes = useStyles();

    return (
      <main >
        <Grid container justify="center" className={classes.amazing}>
            <Grid item xs={12} sm={6} md={5} lg={5} >
                <Typography className={classes.heading1} variant="h2"style={{paddingTop:100}}>Amazing</Typography>
               <Typography variant="h2"className={classes.heading1}>Experiences from Our Wonderful Customers</Typography>
               <p className={classes.paragraph1}>Here is what the customers and vendors are saying about us, you can share your stories with us too.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={5}>
                <img src={Testimonial} alt="" className={classes.image}  />
            </Grid>   
        </Grid>

        <Grid container justify="center" className={classes.Tolu}>
            <Grid item xs={12} sm={6} md={6} lg={5}>
                <img src={Black} alt=""  className={classes.image} />
            </Grid> 
            <Grid item xs={12} sm={6} md={6} lg={5} >
               <Typography variant="h5"className={classes.headingtolu}>Tolu & Joy’s Experience</Typography>
               <Button className={classes.button1}>CUSTOMER</Button>
               <p className={classes.paragraphtolu}>I had the best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great experience. I would definately be coming back!
                I had the best experience shopping with vasiti. Usability of the website was great, very good customer 
                service, an all round great experience. I would definately be coming back!</p>
                <p className={classes.paragraph3}>Share your own story!</p>
            </Grid>  
        </Grid>

        <Grid container justify="center" style={{paddingTop:90}} spacing={2} className={classes.customers}>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse4} alt=""  className={classes.img} />  
            <p className={classes.name}>Joseph Ike</p>
            <span className={classes.place}>In Ikeja </span> <span className={classes.customer}>CUSTOMER</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse11} alt=""  className={classes.img} />  
            <p className={classes.name}>Adetola Fashina</p>
            <span className={classes.place}>Ibadan </span> <span className={classes.customer}>CUSTOMER</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse7} alt=""  className={classes.img} />  
            <p className={classes.name}>Emmanuel Fayemi</p>
            <span className={classes.place}>In Akoka </span> <span className={classes.customer}>CUSTOMER</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
        </Grid>

        <Grid container justify="center" style={{marginTop:0}}spacing={2} className={classes.vendors}>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse1} alt=""  className={classes.img} />  
            <p className={classes.name}>Chisom Obilor</p>
            <span className={classes.place}>In Magodo </span> <span className={classes.vendor}>VENDOR</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse5} alt=""  className={classes.img} />  
            <p className={classes.name}>Adunoluwa Adeyemi</p>
            <span className={classes.place}>Iwo Road </span> <span className={classes.vendor}>VENDOR</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse10} alt=""  className={classes.img} />  
            <p className={classes.name}>Chidi Okeke</p>
            <span className={classes.place}>In Somolu </span> <span className={classes.vendor}>VENDOR</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
        </Grid>

        <Grid container justify="center" className={classes.Josiah}>
            <Grid item xs={12} sm={6} md={5} lg={5} >
               <Typography variant="h5"className={classes.headingjosiah}>Josiah’s Experience</Typography>
               <Button className={classes.button2}>VENDOR</Button>
               <p className={classes.paragraphjosiah}>I had the best experience shopping with vasiti. Usability of the 
                  website was great, very good customer service, an all round great experience. I would definately
                  be coming back! I had the best experience shopping with vasiti. Usability of the website was great,
                  very good customer service, an all round great experience. I would definately be coming back!</p>
                <p className={classes.paragraph3} style={{color:'black'}}>Share your own story!</p>
            </Grid>  
            <Grid item xs={12} sm={6} md={5} lg={5}>
                <img src={woman} alt=""  className={classes.image} />
            </Grid> 
        </Grid>

        <Grid container justify="center" style={{paddingTop:90}}spacing={2} className={classes.vendors}>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse2} alt=""  className={classes.img} />  
            <p className={classes.name}>Temi Obadofin</p>
            <span className={classes.vendor}>VENDOR</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse12} alt=""  className={classes.img} />  
            <p className={classes.name}>Promise Ejiofor</p>
            <span className={classes.vendor}>VENDOR</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse9} alt=""  className={classes.img} />  
            <p className={classes.name}>Feyisola Arinola</p>
            <span className={classes.place}>In Somolu </span> <span className={classes.vendor}>VENDOR</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
        </Grid>

        <Grid container justify="center" style={{marginTop:0}}spacing={2} className={classes.vendors}>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse3} alt=""  className={classes.img} />  
            <p className={classes.name}>Karen Ibeh</p>
            <span className={classes.vendor}>VENDOR</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse6} alt=""  className={classes.img} />  
            <p className={classes.name}>Oluchi Uzo</p>
            <span className={classes.vendor}>VENDOR</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} >
            <img src={Ellipse8} alt=""  className={classes.img} />  
            <p className={classes.name}>Amos Okafor</p>
            <span className={classes.vendor}>VENDOR</span>  
            <p className={classes.text}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
               mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
               ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
               Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </Grid>
        </Grid>
    </main>
    );
  };
  
  export default Body;
  
  
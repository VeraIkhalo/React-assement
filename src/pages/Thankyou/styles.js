import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
  heading: {
    width:250,
  },
 text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    width:300,
    lineHeight: 1.5,
    textAlign: 'center',
    color: '#4A4A4A'
},
  button: {
    width: 253,
    height: 50,
    color:'white',
    float:'right',
    background: '#FF5C00',
    boxShadow: '2px 8px 30px rgba(230, 83, 0, 0.18)',
    borderRadius: 8,
    '&:hover': {
        background: "#FF5C33",
        },},
 paper:{
     display:'flex',
     justifyContent:'center',
     flexDirection:'column',
     textAlign:'center',
     alignItems:'center',
     padding:10
     },
     
 image:{
    width:90
  }



}));

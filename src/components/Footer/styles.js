import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    footer: {
        backgroundColor: 'black',
        paddingLeft:40,
        paddingRight:40
    },
    member: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
        maxWidth: 340,
        paddingTop:70
    },
    memberparagraph: {
        maxWidth: 340,
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#FFFFFF'
    },
    input: {
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 6,
        outline:'none',
        color: 'white',
        padding:10,
        width:'55%',
        textDecoration: 'none',
        border:'none'
    },
    button: {
        position: 'absolute',
        right:210,
        top:1,
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: 13,
        color: 'black',
        backgroundColor:'white',
        '&:hover': {
            background: "grey",
            },
    },
   footerheading: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF'
    },
    image: {
        width:'100%'
    },
   list: {
     fontFamily: 'Roboto',
     fontStyle: 'normal',
     fontSize: 14,
     color: '#FFFFFF',
     cursor:'pointer'
   },
   icon: {
       borderRadius: 50,
       border:'1px solid white',
       padding:10
   }
  
}));

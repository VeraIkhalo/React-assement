import { makeStyles  } from '@material-ui/core/styles';

export default makeStyles(() => ({
  amazing: {
      paddingLeft : 10,
      paddingRight : 10
    } , 
  root: {
    maxWidth: '100%'
    },
  paragraph1: {
    fontSize:20,
    maxWidth:478
    },
  heading1: {
    fontWeight:700
    },

  Tolu: {
    backgroundColor:'black',
    marginTop:0,
    paddingLeft : 10,
    paddingRight : 10,
    "@media (max-width: 900px)": {
      display:'flex',
      flexDirection: 'column-reverse'
    },

    },

  headingtolu: {
    fontWeight: 700,
    fontSize: 32,
    paddingTop:70,
    color: '#FFF'
    },
   button1: {
     backgroundColor:'transparent',
     color:'white',
     border: '1px solid white',
     width: 76,
     height: 16,
     fontFamily: 'Inter',
     padding:12,
     fontWeight: 500,
     fontSize: 13,
   },
   image: {
     width:'100%'
   },
  paragraphtolu: {
    maxWidth:350,
    width: 417,
    height: 216,
    fontSize: 18,
    color: '#FFF'
    }, 
  paragraph3:{
    width: 274,
    height: 32,
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    paddingBottom:0,
    borderBottom: '2px solid red'
   },
  img: {
    width: 200,
    height: 200,
   },
   customers: {
       paddingLeft:20,
       paddingRight:20,
   },
  name: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 24,
    letterSpacing: 0.02,
    color: '#474747',
    lineHeight:0,
    },
  place: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 15,
    color: '#535353',
    marginRight: 7,
    },
  customer: {
    fontFamily: 'Inter',
    fontWeight: 500,
    backgroundColor: '#d5d3e3',
    padding:4,
    fontSize: 13,
    borderRadius:6,
    color: '#0D019A',
    },
   vendor: {
     width: 56,
     height: 16,
     borderRadius:6,
     padding:4,
     fontFamily: 'Inter',
     fontWeight: 500,
     fontSize: 13,
     color: '#049A01',
     backgroundColor: '#d8f2d8',
    }, 
    vendors: {
        paddingLeft:20,
        paddingRight:20,
    },
  text: {
    width: 300,
    height: 264,
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#474747',
    },
    Josiah: {
        backgroundColor:'#FFF8F5',
        marginTop:0,
        paddingLeft:10,
        paddingRight:10
        },
    headingjosiah: {
        fontWeight: 700,
        fontSize: 32,
        paddingTop:70,
        }, 
    paragraphjosiah: {
            maxWidth:350,
            width: 417,
            height: 216,
            fontSize: 18
            },     
    button2: {
                backgroundColor:'transparent',
                color:'#FF5C00',
                border: '1px solid #FF5C00',
                width: 76,
                height: 16,
                fontFamily: 'Inter',
                padding:12,
                fontWeight: 500,
                fontSize: 13,
              },        
           
}));





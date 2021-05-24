import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
 input: {
     width:'95%',
     padding:20,
     fontSize:20,
     marginBottom: 20,
     outline:'none',
     border:'1px solid silver',
     borderRadius:5,
     alignItems: 'center',
     '&:focus': {
        border: "1px solid #FF5C00",
        },
      
 },
 sharestory: {
     fontWeight: 'bold'
 },
 form: {
     fontSize:20,
     width:'70%',
     margin:'auto',
     paddingLeft:70,
     paddingRight:70,
     paddingTop: 20
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
        },
    },
    label: {
        marginBottom:20
    },
    icon: {
        position:'absolute',
        right:40,
        bottom:40,
        cursor: 'pointer'
    },
    interact: {
        display:'flex',
        justifyContent:'space-between',
        marginBottom: 10
    },
    firstlastname: {
        display: 'flex',
        justifyContent:'space-between'
    } 
  
}));

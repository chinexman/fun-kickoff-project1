import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // background: 'blue',
    // minHeight: '100vh',
    // '& .MuiInput-underline:before': {
    //   borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    // },
    background: theme.palette.background.default,
  },
  navbar: {
    background: '#ffffff',
  },
  navlogo: {
    color: '#f44336',
  },
  navheading: {
    marginLeft: '20px',
    width: '40%',
    color: '#000000',
  },
  navheading2: {
    // marginLeft: '20px',
    color: '#000000',
    paddingBottom: '15px',
  },
  navbarlogin: {
    width: 140,
    height: 44,
    margin: '10px',

    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f44336',
    color: '#000000',
  },
  navbarsignup: {
    width: 140,
    height: 44,
    margin: '10px',
    borderRadius: theme.shape.borderRadius,
  },
  navbarbutton: {
    width: '100%',
    marginLeft: '700px',
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    // background: 'blue',
  },
  link: { textDecoration: 'none' },
  authWrapper: {
    display: 'flex',
    width: '100vw',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
    background: theme.palette.background.default,
  },
  form: {
    background: theme.palette.background.paper,
    width: '60%',
    // marginTop: '20px',
    // margin: '200px',
  },
  form1: {
    background: theme.palette.background.paper,
    alignSelf: 'center',
    marginLeft: '200px',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
  },
}));

export default useStyles;

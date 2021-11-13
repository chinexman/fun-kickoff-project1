import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  navbar: {
    background: '#ffffff',
  },
  navlogo: {
    color: '#f44336',
  },
  navheading: {
    marginLeft: '20px',
    color: '#000000',
  },
  authWrapper: {
    display: 'flex',
    width: '100vw',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
    background: 'blue',
  },
  form: {
    background: 'yellow',
    // margin: '200px',
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

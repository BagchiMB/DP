import sizes from './sizes'
import DRAWER_WIDTH from '../constants'
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: 'flex',
    overflow:"hidden",
    height:"100vh",
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display:"flex",
    alignItems:"center",
    [sizes.down('sm')]:
    {
      width:"380px",
    },
    overflow:'hidden'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    width:'100%',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height:"calc(100vh - 64px)",
    padding:'0',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  DrawerContainer:
  {
    width:"90%",
    height:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  DrawerBtns:
  {
    width:"100%",
    display:"flex",
    justifyContent:"space-around"
  }
});

export default styles
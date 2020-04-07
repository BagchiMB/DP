import sizes from './sizes'
import DRAWER_WIDTH from '../constants'
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
    root:
    {
        display:"flex",
    },
    hide: {
      display: 'none',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
        height:'64px',
        [sizes.down('sm')]:
        {
          height:'50px',
        },
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        [sizes.down('sm')]:
        {
          width: `calc(100% - 380px)`,
        },
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 20,
      },
      NavBtn:
      {
        marginRight:'2rem',
        "& a":
        {
            textDecoration:'none'
        },
        [sizes.down('sm')]:
        {
          marginRight:'10px',
          display:'flex',
          
        }
      },
      Btn:
      {
        marginRight:'1rem',
        [sizes.down('sm')]:
        {
          padding:"2px",
          fontSize:"0.8rem",
        },
      },
      head:
      {
        [sizes.down('sm')]:
        {
          fontSize:'15px',
          marginRight:'10px'
        },
      }
})

export default styles
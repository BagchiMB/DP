import chroma from 'chroma-js'
import sizes from './sizes'
export default
{
    ColorBox:
    {
        height:props=>props.showColorBox?'25%':'50%',
        width:'20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor:'pointer',
        marginTop:'-4px',
        "&:hover button":
        {
            opacity:'1'
        },
        [sizes.down("lg")]:
        {
            width:"25%",
            height:props=>props.showColorBox?'20%':'33.3333%',
        },
        [sizes.down("md")]:
        {
            width:'50%',
            height:props=>props.showColorBox?'10%':'20%',
        },
        [sizes.down("xs")]:
        {
            width:'100%',
            height:props=>props.showColorBox?'5%':'10%',
        },
        

    },
    copyText:
    {
        color:props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0, 0, 0, 0.5)':'#fff'
    },
    colorName:
    {
        color:props => chroma(props.background).luminance() <= 0.05 ? '#fff':'black'
    },
    MoreButton:
    {
        color:props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0, 0, 0, 0.5)':'#fff',
        position: 'absolute',
        left:"84%",
        top:"84%",
        backgroundColor: "rgba(255, 255, 255, 0.274)",
        padding:"5px",
        textTransform: "uppercase",
        fontSize:"0.9rem",
        [sizes.down("lg")]:
        {
            top:'80%',
            fontSize:"0.7rem",
        },
        [sizes.down("md")]:
        {
            top:'60%',
            fontSize:"0.7rem",
        },
        [sizes.down("sm")]:
        {
            top:'10%',
            fontSize:"0.7rem",
            left:"88%"
        }
    },
    copyName:
    {
        color:props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0, 0, 0, 0.5)':'#fff',
        height: '30px',
        width:'100px',
        position: 'absolute',
        top:'50%',
        left:'50%',
        marginLeft:'-50px',
        marginTop:'-15px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.267)',
        opacity: '0',
        cursor:'pointer',
        outline: 'none',
    },
    ColorBoxContent:
    {
        position: 'absolute',
        top:'88%',
        left:'2%',
        color:'black',
        textTransform: 'uppercase',
        fontSize:'12px',
        fontWeight: '600',
        [sizes.down("lg")]:
        {
            top:'86%',
        },
        [sizes.down("md")]:
        {
            top:'70%',
        },
        [sizes.down("sm")]:
        {
            top:'45%',
        }
    },
    ColorBoxOverlay:
    {
        height:'100%',
        width:'100%',
        zIndex:'0',
        opacity:'0',
        transition:'transform 0.6s ease-in-out',
    },
    ShowOverlaybackground:
    {
        position: 'absolute',
        opacity:'1',
        zIndex:'10',
        transform: 'scale(50)',
    },
    ColorBoxOverlayText:
    {
        position: 'fixed',
        top:'35vh',
        left:'0vw',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        opacity:'0',
        transform: 'scale(0.1)',
    },
    ColorBoxOverlayText2:
    {
        opacity:'1',
        zIndex:'25',
        transform: 'scale(1)',
        transition:'all 0.2s ease-in-out',
        transitionDelay:'0.3s',
        "& h1":
        {
            textShadow: '3px 5px 5px rgb(0, 0, 0)',
            marginBottom:'0px',
            color:'white',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '4rem',
            background: 'rgba(255, 255, 255, 0.267)',
            width:'100vw',
        },
        "& p":
        {
            marginTop: '1vh',
            fontSize: '2rem',
            fontWeight: '100',
            letterSpacing: '3px',
        }
    }

}
import sizes from './sizes'
export default
{
    Navbar:
    {
        display:"flex",
        [sizes.down('sm')]:
        {
            height:'10vh',
        }
    },
    logo:
    {
        display:'flex',
        alignItems:'center',
        padding:'2vh',
        backgroundColor: '#eceff1',
        fontFamily: "'Roboto', sans-serif",
        "& a":
        {
            textDecoration: 'none',
            color:'black',
            fontWeight: '700',
            fontSize: '1.2rem',
            [sizes.down('sm')]:
            {
                fontSize:'0.9rem',
            }
        },
    },
    NavbarSlider:
    {
        paddingTop: '2vh',
        display: 'flex',
        justifyContent: 'space-around',
        width:'340px',
        margin:'0 10px',
        "& span":
        {
            width:'100px',
            marginRight: '20px',
            [sizes.down('sm')]:
            {
                fontSize:'0.9rem',
                width:'50px',
            }
        },
        "& .rc-slider .rc-slider-track":
        {
            backgroundColor:"transparent",
        },
        "& .rc-slider-rail":
        {
            height:"8px",
        },
        "& .rc-slider-handle":
        {
            backgroundColor: 'green',
            outline: 'none',
            border:'2px solid green',
            boxShadow: 'none',
            height:'13px',
            width:'13px',
            marginTop:'-2px',
        },
        "& .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus":
        {
            outline: 'none',
            border:'2px solid green',
            boxShadow: 'none',
        },
        [sizes.down('sm')]:
        {
            display:'block',
            width:'85px',
        }
    },
    SelectContainer:
    {
        marginLeft: 'auto',
        marginRight: '2rem',
        marginTop:'1vh',
        [sizes.down('sm')]:
        {
            display:'block',
            width:'80px',
        }
    },
}
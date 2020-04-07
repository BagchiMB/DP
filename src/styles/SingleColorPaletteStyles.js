import sizes from './sizes'
export default
{
    Palette:
    {
        height:'100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    },
    PaletteColors:
    {
        height:'90%',
    },
    GoBackButton:
    {
        height: '30px',
        width:'100px',
        position: 'absolute',
        top:'50%',
        left:'50%',
        marginLeft:'-50px',
        marginTop:'-15px',
        border: 'none',
        color:'#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.267)',
        opacity: '1',
        cursor:'pointer',
        outline: 'none',
        textDecoration: 'none',
        textAlign: 'center',
        paddingTop:'2px',
    },
    ColorBox:
    {
        height:'50%',
        width:'20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor:'pointer',
        marginTop:'-4px',
        backgroundColor: 'rgba(0, 0, 0, 0.849)',
        [sizes.down('lg')]:
        {
            width:"25%",
            height:"33.33%"
        },
        [sizes.down('md')]:
        {
            width:"50%",
            height:"20%"
        },
        [sizes.down('sm')]:
        {
            width:"100%",
            height:"10%"
        }
    }
}
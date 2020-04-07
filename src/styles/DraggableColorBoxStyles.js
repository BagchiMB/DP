import sizes from './sizes'
import chroma from 'chroma-js'
export default
{
    root:
    {
        height:'25%',
        width:'20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor:'pointer',
        marginTop:'-7px',
        [sizes.down("lg")]:
        {
            height:'20%',
            width:'25%',
        },
        [sizes.down("md")]:
        {
            height:'10%',
            width:'50%',
        },
        [sizes.down("sm")]:
        {
            height:'5%',
            width:'100%',
        },
    },
    ColorBoxContent:
    {
        width:'95%',
        position: 'absolute',
        top:'86%',
        left:'2%',
        color:props => chroma(props.color).luminance() <= 0.05 ? 'rgba(255,255,255,0.8)':'rgba(0,0,0,0.6)',
        textTransform: 'uppercase',
        fontSize:'12px',
        fontWeight: '600',
        display:"flex",
        justifyContent:"space-between",
        [sizes.down("md")]:
        {
            top:'70%',
        },
        [sizes.down("sm")]:
        {
            top:'50%',
        },
        "& svg":
        {
            marginTop:'-8px',
            transition:'all 0.3s ease-in',
        },
        "& svg:hover":
        {
            color:"white",
            transform:"scale(1.3)"
        }
    },
    
}
import sizes from './sizes'
export default
{
    root:
    {
        backgroundColor:"#fff",
        borderRadius:"5px",
        padding:"0.5rem",
        overflow:"hidden",
        position:"relative",
        cursor:"pointer",
        "&:hover svg":
        {
            opacity:'1'
        },
        
    },
    colors:
    {
        backgroundColor:"rgb(252, 203, 203)",
        height:"120px",
        width:"100%",
        borderRadius:"2px",
        overflow:"hidden"
    },
    title:
    {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        margin:"0",
        color:"black",
        paddingTop:"0.5rem",
        fontSize:"1rem",
        position:"relative"
    },
    emoji:
    {
        marginLeft: "0.5rem",
        fontSize:"1.5rem"
    },
    miniColor:
    {
        height:"25%",
        width:"20%",
        display:"inline-block",
        margin:"0 auto",
        position:"relative",
        marginBottom:"-4px"
    },
    delete:
    {

    },
    deleteIcon:
    {
        color:"#fff",
        backgroundColor:"#eb3d30",
        width:"20px",
        height:"20px",
        position:"absolute",
        right:"0",
        top:"0",
        zIndex:"10",
        opacity:"0",
        padding:"10px",
        transition:"all 0.5s ease-out",
        [sizes.down('sm')]:
        {
            opacity:"1",
        }
    }
}
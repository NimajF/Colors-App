import { withStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";


const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        // overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
        
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        diplsay: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },

    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4px"

    }
}
function MiniPalette(props){
    const {classes, palette} = props;
    const navigate = useNavigate()
    const miniColorBoxes = palette.colors.map(color => (
        <div 
            className={classes.miniColor} 
            style={{ backgroundColor: color.color }} 
            key={color.name}
            onClick={() => navigate(`/palette/${palette.id}`)}
        />

       
    ))


    return(
        <div className={classes.root}>
           <div className={classes.colors}>
                {miniColorBoxes}
           </div>
           <h5 className={classes.title}>{palette.paletteName}</h5>
        </div>

    )
}


export default withStyles(styles)(MiniPalette);
//high order component. Returns a new version of this component with these styles


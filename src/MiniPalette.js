import { withStyles } from "@mui/styles";
import React from "react";


const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
        
    },
    colors: {
        backgroundColor: "grey"
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
    }
}
function MiniPalette(props){
    const {classes} = props;
    console.log(classes)
    return(
        <div className={classes.root}>
           <div className={classes.colors}></div>
           <h5 className={classes.title}>{props.paletteName}</h5>
        </div>

    )
}


export default withStyles(styles)(MiniPalette);
//high order component. Returns a new version of this component with these styles


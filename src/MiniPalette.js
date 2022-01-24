import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/MiniPaletteStyles"
import { withStyles } from "@mui/styles";


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


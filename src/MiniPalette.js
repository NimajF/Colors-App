import React from "react";
import styles from "./styles/MiniPaletteStyles"
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

function MiniPalette(props){
    const {classes, palette} = props;
    const miniColorBoxes = palette.colors.map(color => (
        <div 
            className={classes.miniColor} 
            style={{ backgroundColor: color.color }} 
            key={color.name}
            // onClick={() => navigate(`/palette/${palette.id}`)}
        />

       
    ))


    return(
        <Link to={`/palette/${palette.id}`} style={{textDecoration: "none"}} >
            <div className={classes.root}>
                <div className={classes.delete} >
                    <DeleteIcon className={classes.deleteIcon} style={{transition: "all .2s ease-in-out"}} />
                </div>
                <div className={classes.colors}>
                        {miniColorBoxes}
                </div>
                <h5 className={classes.title}>{palette.paletteName}</h5>
            </div>
        </Link>

    )
}


export default withStyles(styles)(MiniPalette);
//high order component. Returns a new version of this component with these styles


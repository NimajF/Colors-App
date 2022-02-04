import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/MiniPaletteStyles";
import { withStyles } from "@mui/styles";
import DeleteIcon from '@mui/icons-material/Delete';


const MiniPalette = React.memo(props => {
    const {classes, palette, openDialog, id} = props;
    const miniColorBoxes = palette.colors.map(color => (
        <div 
            className={classes.miniColor} 
            style={{ backgroundColor: color.color }} 
            key={color.name}
        />
    ))
    
    const handleDialog =  useCallback(e => {
        e.stopPropagation();
        openDialog(id);
    }, [id, openDialog]);

    return(
        
            <div className={classes.root}>
                {palette.type === "custom" && <DeleteIcon 
                        className={classes.deleteIcon} 
                        style={{transition: "all .2s ease-in-out"}} 
                        onClick={handleDialog}
                    />}
                <Link to={`/palette/${palette.id}`} style={{textDecoration: "none"}} >
                    <div className={classes.colors}>
                        {miniColorBoxes}
                    </div>
                    <h5 className={classes.title}>
                        {palette.paletteName}<span className={classes.emoji}>{palette.emoji}</span>
                    </h5>
                </Link>
            </div>
       

    )
}
)

export default withStyles(styles)(MiniPalette);
//high order component. Returns a new version of this component with these styles


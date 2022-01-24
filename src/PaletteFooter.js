import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles/PaletteFooterStyles"


function PaletteFooter(props){
    const { classes, palette } = props;
    return(
        <div>
            <footer className={classes.PaletteFooter}>
                <p>{palette.paletteName}</p>
            </footer>
        </div>
    )
}

export default withStyles(styles)(PaletteFooter);
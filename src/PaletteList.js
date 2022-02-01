import React from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";

import styles from "./styles/PaletteListStyles"

function PaletteList(props){
    const { palettes, classes, deletePalette } = props;

    
    
    
    return(
        <div className={classes.root} >
            <div className={classes.container} >
                <nav className={classes.nav} >
                    <h1 className={classes.heading} >React Colors</h1>
                    <Link  className={classes.paletteFormLink} to={`/palette/new`}>Create your own palette</Link>
                </nav>
                <div className={classes.palettes} >
                    {palettes.map(palette => (
                    <MiniPalette key={palette.id} id={palette.id} palette={palette} handleDelete={deletePalette} />
                    
                    
                ))}
                </div>
            </div>
            
           
        </div>
    )
}

export default withStyles(styles)(PaletteList);
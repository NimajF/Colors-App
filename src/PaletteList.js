import React from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";

import styles from "./styles/PaletteListStyles"

function PaletteList(props){
    const { palettes, classes } = props;

    
    
    
    
    
    return(
        <div className={classes.root} >
            <div className={classes.container} >
                <nav className={classes.nav} >
                    <h1>React Colors</h1>
                    <Link to={`/palette/new`}>Create your own palette</Link>
                </nav>
                <div className={classes.palettes} >
                    {palettes.map(palette => (
                    <MiniPalette key={palette.id} palette={palette}/>
                    
                    
                ))}
                </div>
            </div>
            
           
        </div>
    )
}

export default withStyles(styles)(PaletteList);
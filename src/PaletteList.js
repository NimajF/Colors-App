import React from "react";
import MiniPalette from "./MiniPalette";
import NewPaletteForm from "./NewPaletteForm";
import { Link, useNavigate } from "react-router-dom";
import { withStyles } from "@mui/styles";

import styles from "./styles/PaletteListStyles"

function PaletteList(props){
    const { palettes, classes } = props
    const navigate = useNavigate()
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
                    
                    // <h2>{palette.paletteName}</h2>
                ))}
                </div>
            </div>
            
           
        </div>
    )
}

export default withStyles(styles)(PaletteList);
import React from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { height } from "@mui/system";



const styles = {
    root: {
        backgroundColor: "blue",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"

    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        border: "1px solid white"
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
}

function PaletteList(props){
   const { palettes, classes } = props

    return(
        <div className={classes.root} >
            <div className={classes.container} >
                <nav className={classes.nav} >
                    <h1>React Colors</h1>
                </nav>
                <div className={classes.palettes} >
                    {palettes.map(palette => (
                    <MiniPalette {...palette}/>
                    // <Link key={palette.id} to={`/palette/${palette.id}`} >{palette.paletteName}</Link>
                    // <h2>{palette.paletteName}</h2>
                ))}
                </div>
            </div>
            
           
        </div>
    )
}

export default withStyles(styles)(PaletteList);
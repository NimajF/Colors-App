import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import seedsColors from "./seedsColors";
import { generatePalette } from "./colorHelpers";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar"
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@mui/styles";


const styles = {
    Palette: {
        height: "100vh",
        overflow: "hidden",
    },
    colors: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.9px",
        opacity: 1,
        backgroundColor: "black"

        }
    }

function SingleColorPalette(props){
    const { classes } = props
    const { paletteId, colorId } = useParams();
    const [format, setFormat] = useState("hex");


    const tryToFindPalette = id => {
        return seedsColors.find(function(palette) {
            return palette.id === id
        })
    }

    const palette = generatePalette(tryToFindPalette(paletteId))

    

    const gatherShades = (palette, colorToFilterBy) => {
        let shades = []
        let allColors = palette.colors
        for (let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
            
        }
        return shades.slice(1);
    }

    const _shades = gatherShades(palette, colorId)
    console.log(_shades)
   
    
    const colorBoxes = _shades.map((color, index) => (
        <ColorBox 
            key={index} 
            name={color.name} 
            background={color[format]} 
            showingFullPalette={false} 
        />
    ))

    const changeFormat = val => {
        setFormat(val)
    }

    

    return(
        <div className={classes.Palette} >
            <Navbar handleChange={changeFormat} showingAllColors={false} />
            <div className={classes.colors}>
                {colorBoxes}
                <div className={classes.goBack} >
                    <Link to={`/palette/${paletteId}`} className="back-button" > Go back </Link>
                </div>
            </div>
            <PaletteFooter palette={palette}/>
        </div>
    )
}
export default withStyles(styles)(SingleColorPalette);
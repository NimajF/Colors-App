import react, { useState } from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./ColorBox";
import { withStyles } from "@mui/styles";
import "./Palette.css"
import Navbar from "./Navbar";
import seedsColors from "./seedsColors";
import { generatePalette } from "./colorHelpers";
import PaletteFooter from "./PaletteFooter";

const styles = {
    Palette: {
        height: "100vh",
        overflow: "hidden",
    },
    colors: {
        height: "90%"
    }
}

function Palette(props){

    const { classes } = props
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState("hex")

    const { id } = useParams();

    const tryToFindPalette = id => {
        return seedsColors.find(function(palette) {
            return palette.id === id
        })
    }

    const palette = generatePalette(tryToFindPalette(id))
    console.log(palette)
    const colorBoxes = palette.colors[level].map(color => (
       <ColorBox 
            paletteId={palette.id} 
            background={color[format]} 
            name={color.name} 
            key={color.id} 
            id={color.id} 
            showingFullPalette 
        /> 
    ))

    const changeLevel = (newLevel) => {
        setLevel(newLevel)
    }

    const changeFormat = val => {
        setFormat(val)
    }

    return(
        <div className={classes.Palette}>
            <Navbar level={level} changeLevel={changeLevel} handleChange={changeFormat} showingAllColors />
            <div className={classes.colors}>
                {colorBoxes}
            </div>
            <PaletteFooter palette={palette}/>
        </div>
    )
}

export default withStyles(styles)(Palette);
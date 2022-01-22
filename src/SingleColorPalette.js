import React, { useState } from "react";
import { useParams } from "react-router-dom";
import seedsColors from "./seedsColors";
import { generatePalette } from "./colorHelpers";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar"
import PaletteFooter from "./PaletteFooter";

function SingleColorPalette(props){
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
        <ColorBox key={index} name={color.name} background={color[format]} showLink={false} />
    ))

    const changeFormat = val => {
        setFormat(val)
    }

    

    return(
        <div className="Palette" >
            <Navbar handleChange={changeFormat} showingAllColors={false} />
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            <PaletteFooter palette={palette}/>
        </div>
    )
}
export default SingleColorPalette;
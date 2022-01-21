import React, { useState } from "react";
import { useParams } from "react-router-dom";
import seedsColors from "./seedsColors";
import { generatePalette } from "./colorHelpers";
import ColorBox from "./ColorBox";

function SingleColorPalette(props){
    const { paletteId, colorId } = useParams()
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
        <ColorBox key={index} name={color.name} background={color.hex} showLink={false} />
    ))

    return(
        <div className="Palette" >
            <h1>SSS</h1>
            <div className="Palette-colors">
                {colorBoxes}
            </div>

        </div>
    )
}
export default SingleColorPalette;
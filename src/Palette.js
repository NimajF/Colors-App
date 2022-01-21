import react, { useState } from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./ColorBox";
import "./Palette.css"
import Navbar from "./Navbar";
import seedsColors from "./seedsColors";
import { generatePalette } from "./colorHelpers";



function Palette(props){

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
       <ColorBox paletteId={palette.id} background={color[format]} name={color.name} key={color.id} id={color.id} showLink={true} /> 
    ))

    const changeLevel = (newLevel) => {
        setLevel(newLevel)
    }

    const changeFormat = val => {
        setFormat(val)
    }

    return(
        <div className="Palette">
            <Navbar level={level} changeLevel={changeLevel} handleChange={changeFormat} />
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            <footer className="Palette-footer">
                <p>{palette.paletteName}</p>
            </footer>
        </div>
    )
}

export default Palette;
import react, { useState } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css"
import Navbar from "./Navbar";

function Palette(props){

    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState("hex")


    const colorBoxes = props.palette.colors[level].map(color => (
       <ColorBox background={color[format]} name={color.name} key={color.id}/> 
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
                <p>{props.palette.paletteName}</p>
            </footer>
        </div>
    )
}

export default Palette;
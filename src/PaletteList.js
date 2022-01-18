import React from "react";
import { Link } from "react-router-dom";


function PaletteList(props){
   

    return(
        <div>
            <h1>React Colors</h1>
            {props.palettes.map(palette => (
                <Link key={palette.id} to={`/palette/${palette.id}`} >{palette.paletteName}</Link>
                // <h2>{palette.paletteName}</h2>
            ))}
        </div>
    )
}

export default PaletteList;
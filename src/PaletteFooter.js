import React from "react";

function PaletteFooter({palette}){
    return(
        <div>
            <footer className="Palette-footer">
                <p>{palette.paletteName}</p>
            </footer>
        </div>
    )
}

export default PaletteFooter;
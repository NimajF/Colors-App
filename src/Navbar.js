import React from "react";
import Slider, { Range } from "rc-slider";
import 'rc-slider/assets/index.css'
import "./Palette.css"
import "./Navbar.css"

function Navbar({ level, changeLevel }){
    return(
        <header className="Navbar">
            <div className="logo"> 
                <a href="#">reactcolorpicker</a>
            </div>
            <div className="slider-container">
                <span>Level: {level}</span>
                <div className="slider">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}
                        trackStyle={[{ backgroundColor: "transparent" }]}
                        handleStyle={[
                        {
                            backgroundColor: "aquamarine",
                            outline: "none",
                            border: "1px solid aquamarine",
                            boxShadow: "none",
                            width: "13px",
                            height: "13px",
                            marginLeft: "-7px",
                            marginTop: "-3px",
                        },
                        ]}
                        railStyle={{height: "8"}}
                    />
                </div>
            </div>
            
        </header>
    )
}

export default Navbar;
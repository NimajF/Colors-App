import react, { useState } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css"
import Slider, { Range } from "rc-slider";
import 'rc-slider/assets/index.css'

function Palette(props){

    const [level, setLevel] = useState(500)


    const colorBoxes = props.palette.colors[level].map(color => (
       <ColorBox background={color.hex} name={color.name}/> 
    ))

    const changeLevel = (newLevel) => {
        setLevel(newLevel)
    }

    return(
        <div className="Palette">
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
            <div className="Palette-colors">
                {colorBoxes}
            </div>
        </div>
    )
}

export default Palette;
import React, { useState } from "react";
import Slider, { Range } from "rc-slider";
import Select from '@mui/material/Select';
import { IconButton, Snackbar } from "@mui/material";
import  CloseIcon  from "@mui/icons-material/Close";
import 'rc-slider/assets/index.css'
import "./Palette.css"
import "./Navbar.css"
import { FormControl, MenuItem } from "@mui/material";

function Navbar({ level, changeLevel, handleChange }){

    const [format, setFormat] = useState("hex");
    const [open, toggleOpen] = useState(false)

    const handleChangeFormat = event => {
        setFormat(event.target.value)
        handleChange(event.target.value)
        toggleOpen(true)
    }

    const closeSnackbar = () => {
        toggleOpen(false)
    }

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
            <div className="select-container">
                        <FormControl variant="standard" >
                            <Select value={format} onChange={handleChangeFormat} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">
                                <MenuItem value="hex">hex - #ffffff</MenuItem>
                                <MenuItem value="rgb">RGB - rgb(10, 255, 255)</MenuItem>
                                <MenuItem value="rgba">RGBA - rgba(10, 255, 255, 1.0)</MenuItem>
                            </Select>
                        </FormControl>
            </div>
            <Snackbar 
                anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                open={open} 
                autoHideDuration={3000} 
                message={<span id="message-id" >Format changed to {format.toUpperCase()}</span>} 
                ContentProps={{ "aria-describe": "message-id" }}
                onClose={closeSnackbar}
                onChange={handleChangeFormat}
                action={[
                    <IconButton onClick={closeSnackbar} color="inherit" key="clse" aria-label="close" >
                        <CloseIcon/>
                    </IconButton>
                ]}
                >

            </Snackbar>
                
        </header>
    )
}

export default Navbar;